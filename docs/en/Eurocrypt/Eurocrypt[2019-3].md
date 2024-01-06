# Eurocrypt[2019-3]
## On ELFs, Deterministic Encryption, and Correlated-Input Security.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#on-elfs-deterministic-encryption-and-correlated-input-security)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#on-elfs-deterministic-encryption-and-correlated-input-security)
### Authors
* Mark Zhandry, Princeton University, Princeton, USA
### Abstract
> We construct deterministic public key encryption secure for any constant number of arbitrarily correlated computationally unpredictable messages. Prior works required either random oracles or non-standard knowledge assumptions. In contrast, our constructions are based on the exponential hardness of DDH, which is plausible in elliptic curve groups. Our central tool is a new trapdoored extremely lossy function, which modifies extremely lossy functions by adding a trapdoor.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_1](https://doi.org/10.1007/978-3-030-17659-4_1)
## New Techniques for Efficient Trapdoor Functions and Applications.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#new-techniques-for-efficient-trapdoor-functions-and-applications)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#new-techniques-for-efficient-trapdoor-functions-and-applications)
### Authors
* Sanjam Garg, University of California, Berkeley, USA
* Mohammad Hajiabadi, University of California, Berkeley, USA
* Romain Gay, Département informatique de l’ENS, École normale supérieure, CNRS, PSL University, 75005, Paris, France
* Romain Gay, INRIA, Paris, France
* Mohammad Hajiabadi, University of Virginia, Charlottesville, USA
### Abstract
> We develop techniques for constructing trapdoor functions (TDFs) with short image size and advanced security properties. Our approach builds on the recent framework of Garg and Hajiabadi [CRYPTO 2018]. As applications of our techniques, we obtain
> 
> The first construction of deterministic-encryption schemes for block-source inputs (both for the CPA and CCA cases) based on the Computational Diffie-Hellman (CDH) assumption. Moreover, by applying our efficiency-enhancing techniques, we obtain CDH-based schemes with ciphertext size linear in plaintext size.
> 
> The first construction of lossy TDFs based on the Decisional Diffie-Hellman (DDH) assumption with image size linear in input size, while retaining the lossiness rate of [Peikert-Waters STOC 2008].
> 
> Prior to our work, all constructions of deterministic encryption based even on the stronger DDH assumption incurred a quadratic gap between the ciphertext and plaintext sizes. Moreover, all DDH-based constructions of lossy TDFs had image size quadratic in the input size.
> 
> At a high level, we break the previous quadratic barriers by introducing a novel technique for encoding input bits via hardcore output bits with the use of erasure-resilient codes. All previous schemes used group elements for encoding input bits, resulting in quadratic expansions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_2](https://doi.org/10.1007/978-3-030-17659-4_2)
## Symbolic Encryption with Pseudorandom Keys.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#symbolic-encryption-with-pseudorandom-keys)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#symbolic-encryption-with-pseudorandom-keys)
### Authors
* Daniele Micciancio, University of California, San Diego, Mail Code 0404, La Jolla, CA, 92093, USA
### Abstract
> We give an efficient decision procedure that, on input two (acyclic) expressions making arbitrary use of common cryptographic primitives (namely, encryption and pseudorandom generators), determines (in polynomial time) if the two expressions produce computationally indistinguishable distributions for any cryptographic instantiation satisfying the standard security notions of pseudorandomness and indistinguishability under chosen plaintext attack. The procedure works by mapping each expression to a symbolic pattern that captures, in a fully abstract way, the information revealed by the expression to a computationally bounded observer. Our main result shows that if two expressions are mapped to different symbolic patterns, then there are secure pseudorandom generators and encryption schemes for which the two distributions can be distinguished with overwhelming advantage. At the same time if any two (acyclic) expressions are mapped to the same pattern, then the associated distributions are indistinguishable.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_3](https://doi.org/10.1007/978-3-030-17659-4_3)
## Covert Security with Public Verifiability: Faster, Leaner, and Simpler.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#covert-security-with-public-verifiability-faster-leaner-and-simpler)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#covert-security-with-public-verifiability-faster-leaner-and-simpler)
### Authors
* Cheng Hong, Alibaba, Hangzhou, China
* Jonathan Katz, University of Maryland, College Park, USA
* Vladimir Kolesnikov, Georgia Tech, Atlanta, USA
* Wen-jie Lu, University of Tsukuba, Tsukuba, Japan
* Xiao Wang, MIT, Cambridge, USA
* Xiao Wang, BU, Boston, USA
### Abstract
> The notion of covert security for secure two-party computation serves as a compromise between the traditional semi-honest and malicious security definitions. Roughly, covert security ensures that cheating behavior is detected by the honest party with reasonable probability (say, 1/2). It provides more realistic guarantees than semi-honest security with significantly less overhead than is required by malicious security.
> 
> The rationale for covert security is that it dissuades cheating by parties that care about their reputation and do not want to risk being caught. But a much stronger disincentive is obtained if the honest party can generate a publicly verifiable certificate when cheating is detected. While the corresponding notion of publicly verifiable covert (PVC) security has been explored, existing PVC protocols are complex and less efficient than the best covert protocols, and have impractically large certificates.
> 
> We propose a novel PVC protocol that significantly improves on prior work. Our protocol uses only “off-the-shelf” primitives (in particular, it avoids signed oblivious transfer) and, for deterrence factor 1/2, has only 20–40% overhead compared to state-of-the-art semi-honest protocols. Our protocol also has, for the first time, constant-size certificates of cheating (e.g., 354 bytes long at the 128-bit security level).
> 
> As our protocol offers strong security guarantees with low overhead, we suggest that it is the best choice for many practical applications of secure two-party computation.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_4](https://doi.org/10.1007/978-3-030-17659-4_4)
## Efficient Circuit-Based PSI with Linear Communication.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#efficient-circuit-based-psi-with-linear-communication)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#efficient-circuit-based-psi-with-linear-communication)
### Authors
* Benny Pinkas, Bar-Ilan University, Ramat Gan, Israel
* Avishay Yanai, Bar-Ilan University, Ramat Gan, Israel
* Thomas Schneider, TU Darmstadt, Darmstadt, Germany
* Oleksandr Tkachenko, TU Darmstadt, Darmstadt, Germany
### Abstract
> We present a new protocol for computing a circuit which implements the private set intersection functionality (PSI). Using circuits for this task is advantageous over the usage of specific protocols for PSI, since many applications of PSI do not need to compute the intersection itself but rather functions based on the items in the intersection.
> 
> Our protocol is the first circuit-based PSI protocol to achieve linear communication complexity. It is also concretely more efficient than all previous circuit-based PSI protocols. For example, for sets of size \(2^{20}\) it improves the communication of the recent work of Pinkas et al. (EUROCRYPT’18) by more than 10 times, and improves the run time by a factor of 2.8x in the LAN setting, and by a factor of 5.8x in the WAN setting.
> 
> Our protocol is based on the usage of a protocol for computing oblivious programmable pseudo-random functions (OPPRF), and more specifically on our technique to amortize the cost of batching together multiple invocations of OPPRF.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_5](https://doi.org/10.1007/978-3-030-17659-4_5)
## An Algebraic Approach to Maliciously Secure Private Set Intersection.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#an-algebraic-approach-to-maliciously-secure-private-set-intersection)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#an-algebraic-approach-to-maliciously-secure-private-set-intersection)
### Authors
* Satrajit Ghosh, Department of Computer Science, Aarhus University, Aarhus, Denmark
* Tobias Nilges, ITK Engineering GmbH, Rülzheim, Germany
### Abstract
> Private set intersection (PSI) is an important area of research and has been the focus of many works over the past decades. It describes the problem of finding an intersection between the input sets of at least two parties without revealing anything about the input sets apart from their intersection.
> 
> In this paper, we present a new approach to compute the intersection between sets based on a primitive called Oblivious Linear Function Evaluation (OLE). On an abstract level, we use this primitive to efficiently add two polynomials in a randomized way while preserving the roots of the added polynomials. Setting the roots of the input polynomials to be the elements of the input sets, this directly yields an intersection protocol with optimal asymptotic communication complexity \(O(m\kappa )\). We highlight that the protocol is information-theoretically secure against a malicious adversary assuming OLE.
> 
> We also present a natural generalization of the 2-party protocol for the fully malicious multi-party case. Our protocol does away with expensive (homomorphic) threshold encryption and zero-knowledge proofs. Instead, we use simple combinatorial techniques to ensure the security. As a result we get a UC-secure protocol with asymptotically optimal communication complexity \(O((n^2+nm)\kappa )\), where n is the number of parties, m is the set size and \(\kappa \) is the security parameter. Apart from yielding an asymptotic improvement over previous works, our protocols are also conceptually simple and require only simple field arithmetic. Along the way we develop techniques that might be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_6](https://doi.org/10.1007/978-3-030-17659-4_6)
## On Finding Quantum Multi-collisions.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#on-finding-quantum-multi-collisions)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#on-finding-quantum-multi-collisions)
### Authors
* Qipeng Liu, Princeton University, Princeton, NJ, 08544, USA
* Mark Zhandry, Princeton University, Princeton, NJ, 08544, USA
### Abstract
> A k-collision for a compressing hash function H is a set of k distinct inputs that all map to the same output. In this work, we show that for any constant k, \(\varTheta \left( N^{\frac{1}{2}(1-\frac{1}{2^k-1})}\right) \) quantum queries are both necessary and sufficient to achieve a k-collision with constant probability. This improves on both the best prior upper bound (Hosoyamada et al., ASIACRYPT 2017) and provides the first non-trivial lower bound, completely resolving the problem.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_7](https://doi.org/10.1007/978-3-030-17659-4_7)
## On Quantum Advantage in Information Theoretic Single-Server PIR.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#on-quantum-advantage-in-information-theoretic-single-server-pir)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#on-quantum-advantage-in-information-theoretic-single-server-pir)
### Authors
* Dorit Aharonov, Hebrew University, Jerusalem, Israel
* Ayal Green, Hebrew University, Jerusalem, Israel
* Zvika Brakerski, Weizmann Institute of Science, Rehovot, Israel
* Kai-Min Chung, Academia Sinica, Taipei, Taiwan
* Ching-Yi Lai, Academia Sinica, Taipei, Taiwan
* Or Sattath, Ben-Gurion University, Beersheba, Israel
### Abstract
> In (single-server) Private Information Retrieval (PIR), a server holds a large database \({\mathtt {DB}}\) of size n, and a client holds an index \(i \in [n]\) and wishes to retrieve \({\mathtt {DB}}[i]\) without revealing i to the server. It is well known that information theoretic privacy even against an “honest but curious” server requires \(\varOmega (n)\) communication complexity. This is true even if quantum communication is allowed and is due to the ability of such an adversarial server to execute the protocol on a superposition of databases instead of on a specific database (“input purification attack”).
> 
> Nevertheless, there have been some proposals of protocols that achieve sub-linear communication and appear to provide some notion of privacy. Most notably, a protocol due to Le Gall (ToC 2012) with communication complexity \(O(\sqrt{n})\), and a protocol by Kerenidis et al. (QIC 2016) with communication complexity \(O(\log (n))\), and O(n) shared entanglement.
> 
> We show that, in a sense, input purification is the only potent adversarial strategy, and protocols such as the two protocols above are secure in a restricted variant of the quantum honest but curious (a.k.a specious) model. More explicitly, we propose a restricted privacy notion called anchored privacy, where the adversary is forced to execute on a classical database (i.e. the execution is anchored to a classical database). We show that for measurement-free protocols, anchored security against honest adversarial servers implies anchored privacy even against specious adversaries.
> 
> Finally, we prove that even with (unlimited) pre-shared entanglement it is impossible to achieve security in the standard specious model with sub-linear communication, thus further substantiating the necessity of our relaxation. This lower bound may be of independent interest (in particular recalling that PIR is a special case of Fully Homomorphic Encryption).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_8](https://doi.org/10.1007/978-3-030-17659-4_8)
## Verifier-on-a-Leash: New Schemes for Verifiable Delegated Quantum Computation, with Quasilinear Resources.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#verifier-on-a-leash-new-schemes-for-verifiable-delegated-quantum-computation-with-quasilinear-resources)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#verifier-on-a-leash-new-schemes-for-verifiable-delegated-quantum-computation-with-quasilinear-resources)
### Authors
* Andrea Coladangelo, Department of Computing and Mathematical Sciences, California Institute of Technology, Pasadena, USA
* Thomas Vidick, Department of Computing and Mathematical Sciences, California Institute of Technology, Pasadena, USA
* Andrea Coladangelo, CMS, Caltech, Pasadena, USA
* Thomas Vidick, CMS, Caltech, Pasadena, USA
* Alex B. Grilo, QuSoft and CWI, Amsterdam, The Netherlands
* Stacey Jeffery, QuSoft and CWI, Amsterdam, The Netherlands
### Abstract
> The problem of reliably certifying the outcome of a computation performed by a quantum device is rapidly gaining relevance. We present two protocols for a classical verifier to verifiably delegate a quantum computation to two non-communicating but entangled quantum provers. Our protocols have near-optimal complexity in terms of the total resources employed by the verifier and the honest provers, with the total number of operations of each party, including the number of entangled pairs of qubits required of the honest provers, scaling as \(O(g\log g)\) for delegating a circuit of size g. This is in contrast to previous protocols, whose overhead in terms of resources employed, while polynomial, is far beyond what is feasible in practice. Our first protocol requires a number of rounds that is linear in the depth of the circuit being delegated, and is blind, meaning neither prover can learn the circuit or its input. The second protocol is not blind, but requires only a constant number of rounds of interaction.
> 
> Our main technical innovation is an efficient rigidity theorem which allows a verifier to test that two entangled provers perform measurements specified by an arbitrary m-qubit tensor product of single-qubit Clifford observables on their respective halves of m shared EPR pairs, with a robustness that is independent of m. Our two-prover classical-verifier delegation protocols are obtained by combining this rigidity theorem with a single-prover quantum-verifier protocol for the verifiable delegation of a quantum computation, introduced by Broadbent.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_9](https://doi.org/10.1007/978-3-030-17659-4_9)
## Ring Signatures: Logarithmic-Size, No Setup - from Standard Assumptions.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#ring-signatures-logarithmic-size-no-setup-from-standard-assumptions)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#ring-signatures-logarithmic-size-no-setup-from-standard-assumptions)
### Authors
* Michael Backes, CISPA Helmholtz Center for Information Security, Saarland Informatics Campus, Saarbrücken, Germany
* Nico Döttling, CISPA Helmholtz Center for Information Security, Saarland Informatics Campus, Saarbrücken, Germany
* Lucjan Hanzlik, CISPA Helmholtz Center for Information Security, Saarland Informatics Campus, Saarbrücken, Germany
* Kamil Kluczniak, CISPA Helmholtz Center for Information Security, Saarland Informatics Campus, Saarbrücken, Germany
* Jonas Schneider, CISPA Helmholtz Center for Information Security, Saarland Informatics Campus, Saarbrücken, Germany
* Lucjan Hanzlik, Stanford University, Stanford, USA
### Abstract
> Ring signatures allow for creating signatures on behalf of an ad hoc group of signers, hiding the true identity of the signer among the group. A natural goal is to construct a ring signature scheme for which the signature size is short in the number of ring members. Moreover, such a construction should not rely on a trusted setup and be proven secure under falsifiable standard assumptions. Despite many years of research this question is still open.
> 
> In this paper, we present the first construction of size-optimal ring signatures which do not rely on a trusted setup or the random oracle heuristic. Specifically, our scheme can be instantiated from standard assumptions and the size of signatures grows only logarithmically in the number of ring members.
> 
> We also extend our techniques to the setting of linkable ring signatures, where signatures created using the same signing key can be linked.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_10](https://doi.org/10.1007/978-3-030-17659-4_10)
## Group Signatures Without NIZK: From Lattices in the Standard Model.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#group-signatures-without-nizk-from-lattices-in-the-standard-model)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#group-signatures-without-nizk-from-lattices-in-the-standard-model)
### Authors
* Shuichi Katsumata, National Institute of Advanced Industrial Science and Technology (AIST), The University of Tokyo, Tokyo, Japan
* Shota Yamada, National Institute of Advanced Industrial Science and Technology (AIST), Tokyo, Japan
### Abstract
> In a group signature scheme, users can anonymously sign messages on behalf of the group they belong to, yet it is possible to trace the signer when needed. Since the first proposal of lattice-based group signatures in the random oracle model by Gordon, Katz, and Vaikuntanathan (ASIACRYPT 2010), the realization of them in the standard model from lattices has attracted much research interest, however, it has remained unsolved. In this paper, we make progress on this problem by giving the first such construction. Our schemes satisfy CCA-selfless anonymity and full traceability, which are the standard security requirements for group signatures proposed by Bellare, Micciancio, and Warinschi (EUROCRYPT 2003) with a slight relaxation in the anonymity requirement suggested by Camenisch and Groth (SCN 2004). We emphasize that even with this relaxed anonymity requirement, all previous group signature constructions rely on random oracles or NIZKs, where currently NIZKs are not known to be implied from lattice-based assumptions. We propose two constructions that provide tradeoffs regarding the security assumption and efficiency:
> 
> Our first construction is proven secure assuming the standard LWE and the SIS assumption. The sizes of the public parameters and the signatures grow linearly in the number of users in the system.
> 
> Our second construction is proven secure assuming the standard LWE and the subexponential hardness of the SIS problem. The sizes of the public parameters and the signatures are independent of the number of users in the system.
> 
> Technically, we obtain the above schemes by combining a secret key encryption scheme with additional properties and a special type of attribute-based signature (ABS) scheme, thus bypassing the utilization of NIZKs. More specifically, we introduce the notion of indexed ABS, which is a relaxation of standard ABS. The above two schemes are obtained by instantiating the indexed ABS with different constructions. One is a direct construction we propose and the other is based on previous work.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_11](https://doi.org/10.1007/978-3-030-17659-4_11)
## A Modular Treatment of Blind Signatures from Identification Schemes.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#a-modular-treatment-of-blind-signatures-from-identification-schemes)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#a-modular-treatment-of-blind-signatures-from-identification-schemes)
### Authors
* Eduard Hauck, Ruhr University Bochum, Bochum, Germany
* Eike Kiltz, Ruhr University Bochum, Bochum, Germany
* Julian Loss, Ruhr University Bochum, Bochum, Germany
### Abstract
> We propose a modular security treatment of blind signatures derived from linear identification schemes in the random oracle model. To this end, we present a general framework that captures several well known schemes from the literature and allows to prove their security. Our modular security reduction introduces a new security notion for identification schemes called One-More-Man In the Middle Security which we show equivalent to the classical One-More-Unforgeability notion for blind signatures.
> 
> We also propose a generalized version of the Forking Lemma due to Bellare and Neven (CCS 2006) and show how it can be used to greatly improve the understandability of the classical security proofs for blind signatures schemes by Pointcheval and Stern (Journal of Cryptology 2000).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_12](https://doi.org/10.1007/978-3-030-17659-4_12)
## Efficient Verifiable Delay Functions.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#efficient-verifiable-delay-functions)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#efficient-verifiable-delay-functions)
### Authors
* Benjamin Wesolowski, EPFL IC LACAL, Station 14, 1015, Lausanne, Switzerland
* Benjamin Wesolowski, Cryptology Group, CWI, Amsterdam, The Netherlands
### Abstract
> We construct a verifiable delay function (VDF). A VDF is a function whose evaluation requires running a given number of sequential steps, yet the result can be efficiently verified. They have applications in decentralised systems, such as the generation of trustworthy public randomness in a trustless environment, or resource-efficient blockchains. To construct our VDF, we actually build a trapdoor VDF. A trapdoor VDF is essentially a VDF which can be evaluated efficiently by parties who know a secret (the trapdoor). By setting up this scheme in a way that the trapdoor is unknown (not even by the party running the setup, so that there is no need for a trusted setup environment), we obtain a simple VDF. Our construction is based on groups of unknown order such as an RSA group, or the class group of an imaginary quadratic field. The output of our construction is very short (the result and the proof of correctness are each a single element of the group), and the verification of correctness is very efficient.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_13](https://doi.org/10.1007/978-3-030-17659-4_13)
## Quantum Lightning Never Strikes the Same State Twice.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#quantum-lightning-never-strikes-the-same-state-twice)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#quantum-lightning-never-strikes-the-same-state-twice)
### Authors
* Mark Zhandry, Princeton University, Princeton, USA
### Abstract
> Public key quantum money can be seen as a version of the quantum no-cloning theorem that holds even when the quantum states can be verified by the adversary. In this work, we investigate quantum lightning where no-cloning holds even when the adversary herself generates the quantum state to be cloned. We then study quantum money and quantum lightning, showing the following results:
> 
> We demonstrate the usefulness of quantum lightning beyond quantum money by showing several potential applications, such as generating random strings with a proof of entropy, to completely decentralized cryptocurrency without a block-chain, where transactions is instant and local.
> 
> We give Either/Or results for quantum money/lightning, showing that either signatures/hash functions/commitment schemes meet very strong recently proposed notions of security, or they yield quantum money or lightning. Given the difficulty in constructing public key quantum money, this suggests that natural schemes do attain strong security guarantees.
> 
> We show that instantiating the quantum money scheme of Aaronson and Christiano [STOC’12] with indistinguishability obfuscation that is secure against quantum computers yields a secure quantum money scheme. This construction can be seen as an instance of our Either/Or result for signatures, giving the first separation between two security notions for signatures from the literature.
> 
> Finally, we give a plausible construction for quantum lightning, which we prove secure under an assumption related to the multi-collision resistance of degree-2 hash functions. Our construction is inspired by our Either/Or result for hash functions, and yields the first plausible standard model instantiation of a non-collapsing collision resistant hash function. This improves on a result of Unruh [Eurocrypt’16] which is relative to a quantum oracle.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_14](https://doi.org/10.1007/978-3-030-17659-4_14)
## Secret-Sharing Schemes for General and Uniform Access Structures.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#secret-sharing-schemes-for-general-and-uniform-access-structures)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#secret-sharing-schemes-for-general-and-uniform-access-structures)
### Authors
* Benny Applebaum, Tel Aviv University, Tel Aviv, Israel
* Oded Nir, Tel Aviv University, Tel Aviv, Israel
* Amos Beimel, Ben-Gurion University of the Negev, Be’er-Sheva, Israel
* Naty Peter, Ben-Gurion University of the Negev, Be’er-Sheva, Israel
* Oriol Farràs, Universitat Rovira i Virgili, Tarragona, Catalonia, Spain
### Abstract
> A secret-sharing scheme allows some authorized sets of parties to reconstruct a secret; the collection of authorized sets is called the access structure. For over 30 years, it was known that any (monotone) collection of authorized sets can be realized by a secret-sharing scheme whose shares are of size \(2^{n-o(n)}\) and until recently no better scheme was known. In a recent breakthrough, Liu and Vaikuntanathan (STOC 2018) have reduced the share size to \(O(2^{0.994n})\). Our first contribution is improving the exponent of secret sharing down to 0.892. For the special case of linear secret-sharing schemes, we get an exponent of 0.942 (compared to 0.999 of Liu and Vaikuntanathan).
> 
> Motivated by the construction of Liu and Vaikuntanathan, we study secret-sharing schemes for uniform access structures. An access structure is k-uniform if all sets of size larger than k are authorized, all sets of size smaller than k are unauthorized, and each set of size k can be either authorized or unauthorized. The construction of Liu and Vaikuntanathan starts from protocols for conditional disclosure of secrets, constructs secret-sharing schemes for uniform access structures from them, and combines these schemes in order to obtain secret-sharing schemes for general access structures. Our second contribution in this paper is constructions of secret-sharing schemes for uniform access structures. We achieve the following results:
> 
> A secret-sharing scheme for k-uniform access structures for large secrets in which the share size is \(O(k^2)\) times the size of the secret.
> 
> A linear secret-sharing scheme for k-uniform access structures for a binary secret in which the share size is \(\tilde{O}(2^{h(k/n)n/2})\) (where h is the binary entropy function). By counting arguments, this construction is optimal (up to polynomial factors).
> 
> A secret-sharing scheme for k-uniform access structures for a binary secret in which the share size is \(2^{\tilde{O}(\sqrt{k \log n})}\).
> 
> Our third contribution is a construction of ad-hoc PSM protocols, i.e., PSM protocols in which only a subset of the parties will compute a function on their inputs. This result is based on ideas we used in the construction of secret-sharing schemes for k-uniform access structures for a binary secret.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_15](https://doi.org/10.1007/978-3-030-17659-4_15)
## Towards Optimal Robust Secret Sharing with Security Against a Rushing Adversary.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#towards-optimal-robust-secret-sharing-with-security-against-a-rushing-adversary)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#towards-optimal-robust-secret-sharing-with-security-against-a-rushing-adversary)
### Authors
* Serge Fehr, CWI, Amsterdam, The Netherlands
* Chen Yuan, CWI, Amsterdam, The Netherlands
* Serge Fehr, Mathematical Institute, Leiden University, Leiden, The Netherlands
### Abstract
> Robust secret sharing enables the reconstruction of a secret-shared message in the presence of up to t (out of n) incorrect shares. The most challenging case is when \(n = 2t+1\), which is the largest t for which the task is still possible, up to a small error probability \(2^{-\kappa }\) and with some overhead in the share size.
> 
> Recently, Bishop, Pastro, Rajaraman and Wichs [3] proposed a scheme with an (almost) optimal overhead of \(\widetilde{O}(\kappa )\). This seems to answer the open question posed by Cevallos et al. [6] who proposed a scheme with overhead of \(\widetilde{O}(n+\kappa )\) and asked whether the linear dependency on n was necessary or not. However, a subtle issue with Bishop et al.’s solution is that it (implicitly) assumes a non-rushing adversary, and thus it satisfies a weaker notion of security compared to the scheme by Cevallos et al. [6], or to the classical scheme by Rabin and BenOr [13].
> 
> In this work, we almost close this gap. We propose a new robust secret sharing scheme that offers full security against a rushing adversary, and that has an overhead of \(O(\kappa n^\varepsilon )\), where \(\varepsilon > 0\) is arbitrary but fixed. This \(n^\varepsilon \)-factor is obviously worse than the \(\mathrm {polylog}(n)\)-factor hidden in the \(\widetilde{O}\) notation of the scheme of Bishop et al. [3], but it greatly improves on the linear dependency on n of the best known scheme that features security against a rushing adversary (when \(\kappa \) is substantially smaller than n).
> 
> A small variation of our scheme has the same \(\widetilde{O}(\kappa )\) overhead as the scheme of Bishop et al. and achieves security against a rushing adversary, but suffers from a (slightly) superpolynomial reconstruction complexity.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_16](https://doi.org/10.1007/978-3-030-17659-4_16)
## Simple Schemes in the Bounded Storage Model.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#simple-schemes-in-the-bounded-storage-model)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#simple-schemes-in-the-bounded-storage-model)
### Authors
* Jiaxin Guan, Princeton University, Princeton, NJ, 08544, USA
* Mark Zhandary, Princeton University, Princeton, NJ, 08544, USA
### Abstract
> The bounded storage model promises unconditional security proofs against computationally unbounded adversaries, so long as the adversary’s space is bounded. In this work, we develop simple new constructions of two-party key agreement, bit commitment, and oblivious transfer in this model. In addition to simplicity, our constructions have several advantages over prior work, including an improved number of rounds and enhanced correctness. Our schemes are based on Raz’s lower bound for learning parities.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_17](https://doi.org/10.1007/978-3-030-17659-4_17)
## From Collisions to Chosen-Prefix Collisions Application to Full SHA-1.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#from-collisions-to-chosen-prefix-collisions-application-to-full-sha-1)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#from-collisions-to-chosen-prefix-collisions-application-to-full-sha-1)
### Authors
* Gaëtan Leurent, Inria, Paris, France
* Thomas Peyrin, Nanyang Technological University, Singapore, Singapore
* Thomas Peyrin, Temasek Laboratories, Singapore, Singapore
### Abstract
> A chosen-prefix collision attack is a stronger variant of a collision attack, where an arbitrary pair of challenge prefixes are turned into a collision. Chosen-prefix collisions are usually significantly harder to produce than (identical-prefix) collisions, but the practical impact of such an attack is much larger. While many cryptographic constructions rely on collision-resistance for their security proofs, collision attacks are hard to turn into break of concrete protocols, because the adversary has a limited control over the colliding messages. On the other hand, chosen-prefix collisions have been shown to break certificates (by creating a rogue CA) and many internet protocols (TLS, SSH, IPsec).
> 
> In this article, we propose new techniques to turn collision attacks into chosen-prefix collision attacks. Our strategy is composed of two phases: first a birthday search that aims at taking the random chaining variable difference (due to the chosen-prefix model) to a set of pre-defined target differences. Then, using a multi-block approach, carefully analysing the clustering effect, we map this new chaining variable difference to a colliding pair of states using techniques developed for collision attacks.
> 
> We apply those techniques to MD5 and SHA-1, and obtain improved attacks. In particular, we have a chosen-prefix collision attack against SHA-1 with complexity between \(2^{66.9}\) and \(2^{69.4}\) (depending on assumptions about the cost of finding near-collision blocks), while the best-known attack has complexity \(2^{77.1}\). This is within a small factor of the complexity of the classical collision attack on SHA-1 (estimated as \(2^{64.7}\)). This represents yet another warning that industries and users have to move away from using SHA-1 as soon as possible.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_18](https://doi.org/10.1007/978-3-030-17659-4_18)
## Preimage Attacks on Round-Reduced Keccak-224/256 via an Allocating Approach.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#preimage-attacks-on-round-reduced-keccak-224-256-via-an-allocating-approach)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#preimage-attacks-on-round-reduced-keccak-224-256-via-an-allocating-approach)
### Authors
* Ting Li, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Yao Sun, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Ting Li, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Yao Sun, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
### Abstract
> We present new preimage attacks on standard Keccak-224 and Keccak-256 that are reduced to 3 and 4 rounds. An allocating approach is used in the attacks, and the whole complexity is allocated to two stages, such that fewer constraints are considered and the complexity is lowered in each stage. Specifically, we are trying to find a 2-block preimage, instead of a 1-block one, for a given hash value, and the first and second message blocks are found in two stages, respectively. Both the message blocks are constrained by a set of newly proposed conditions on the middle state, which are weaker than those brought by the initial values and the hash values. Thus, the complexities in the two stages are both lower than that of finding a 1-block preimage directly. Together with the basic allocating approach, an improved method is given to balance the complexities of two stages, and hence, obtains the optimal attacks. As a result, we present the best theoretical preimage attacks on Keccak-224 and Keccak-256 that are reduced to 3 and 4 rounds. Moreover, we practically found a (second) preimage for 3-round Keccak-224 with a complexity of \(2^{39.39}\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_19](https://doi.org/10.1007/978-3-030-17659-4_19)
## bison Instantiating the Whitened Swap-Or-Not Construction.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#bison-instantiating-the-whitened-swap-or-not-construction)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#bison-instantiating-the-whitened-swap-or-not-construction)
### Authors
* Anne Canteaut, Inria, Paris, France
* Virginie Lallemand, Horst Görtz Institute for IT-Security, Ruhr University Bochum, Bochum, Germany
* Gregor Leander, Horst Görtz Institute for IT-Security, Ruhr University Bochum, Bochum, Germany
* Patrick Neumann, Horst Görtz Institute for IT-Security, Ruhr University Bochum, Bochum, Germany
* Friedrich Wiemer, Horst Görtz Institute for IT-Security, Ruhr University Bochum, Bochum, Germany
### Abstract
> We give the first practical instance – bison – of the Whitened Swap-Or-Not construction. After clarifying inherent limitations of the construction, we point out that this way of building block ciphers allows easy and very strong arguments against differential attacks.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_20](https://doi.org/10.1007/978-3-030-17659-4_20)
## Worst-Case Hardness for LPN and Cryptographic Hashing via Code Smoothing.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#worst-case-hardness-for-lpn-and-cryptographic-hashing-via-code-smoothing)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#worst-case-hardness-for-lpn-and-cryptographic-hashing-via-code-smoothing)
### Authors
* Zvika Brakerski, Weizmann Institute of Science, Rehovot, Israel
* Vadim Lyubashevsky, IBM Research – Zurich, Rüschlikon, Switzerland
* Vinod Vaikuntanathan, Massachusetts Institute of Technology, Cambridge, USA
* Daniel Wichs, Northeastern University, Boston, USA
### Abstract
> We present a worst case decoding problem whose hardness reduces to that of solving the Learning Parity with Noise (LPN) problem, in some parameter regime. Prior to this work, no worst case hardness result was known for LPN (as opposed to syntactically similar problems such as Learning with Errors). The caveat is that this worst case problem is only mildly hard and in particular admits a quasi-polynomial time algorithm, whereas the LPN variant used in the reduction requires extremely high noise rate of \(1/2-1/\mathrm{poly}(n)\). Thus we can only show that “very hard” LPN is harder than some “very mildly hard” worst case problem. We note that LPN with noise \(1/2-1/\mathrm{poly}(n)\) already implies symmetric cryptography.
> 
> Specifically, we consider the (n, m, w)-nearest codeword problem ((n, m, w)-NCP) which takes as input a generating matrix for a binary linear code in m dimensions and rank n, and a target vector which is very close to the code (Hamming distance at most w), and asks to find the codeword nearest to the target vector. We show that for balanced (unbiased) codes and for relative error \(w/m \approx {\log ^2 n}/{n}\), (n, m, w)-NCP can be solved given oracle access to an LPN distinguisher with noise ratio \(1/2-1/\mathrm{poly}(n)\).
> 
> Our proof relies on a smoothing lemma for codes which we show to have further implications: We show that (n, m, w)-NCP with the aforementioned parameters lies in the complexity class \(\mathrm {{Search}\hbox {-}\mathcal {BPP}}^\mathcal {SZK}\) (i.e. reducible to a problem that has a statistical zero knowledge protocol) implying that it is unlikely to be \(\mathcal {NP}\)-hard. We then show that the hardness of LPN with very low noise rate \(\log ^2(n)/n\) implies the existence of collision resistant hash functions (our aforementioned result implies that in this parameter regime LPN is also in \(\mathcal {BPP}^\mathcal {SZK}\)).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_21](https://doi.org/10.1007/978-3-030-17659-4_21)
## New Techniques for Obfuscating Conjunctions.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#new-techniques-for-obfuscating-conjunctions)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#new-techniques-for-obfuscating-conjunctions)
### Authors
* James Bartusek, Princeton University, Princeton, USA
* Fermi Ma, Princeton University, Princeton, USA
* Mark Zhandry, Princeton University, Princeton, USA
* Tancrède Lepoint, SRI International, New York, NY, USA
### Abstract
> A conjunction is a function \(f(x_1,\dots ,x_n) = \bigwedge _{i \in S} l_i\) where \(S \subseteq [n]\) and each \(l_i\) is \(x_i\) or \(\lnot x_i\). Bishop et al. (CRYPTO 2018) recently proposed obfuscating conjunctions by embedding them in the error positions of a noisy Reed-Solomon codeword and placing the codeword in a group exponent. They prove distributional virtual black box (VBB) security in the generic group model for random conjunctions where \(|S| \ge 0.226n\). While conjunction obfuscation is known from LWE [31, 47], these constructions rely on substantial technical machinery.
> 
> In this work, we conduct an extensive study of simple conjunction obfuscation techniques.
> 
> We abstract the Bishop et al. scheme to obtain an equivalent yet more efficient “dual” scheme that can handle conjunctions over exponential size alphabets. This scheme admits a straightforward proof of generic group security, which we combine with a novel combinatorial argument to obtain distributional VBB security for |S| of any size.
> 
> If we replace the Reed-Solomon code with a random binary linear code, we can prove security from standard LPN and avoid encoding in a group. This addresses an open problem posed by Bishop et al. to prove security of this simple approach in the standard model.
> 
> We give a new construction that achieves information theoretic distributional VBB security and weak functionality preservation for \(|S| \ge n - n^\delta \) and \(\delta < 1\). Assuming discrete log and \(\delta < 1/2\), we satisfy a stronger notion of functionality preservation for computationally bounded adversaries while still achieving information theoretic security.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_22](https://doi.org/10.1007/978-3-030-17659-4_22)
## Distributional Collision Resistance Beyond One-Way Functions.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#distributional-collision-resistance-beyond-one-way-functions)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#distributional-collision-resistance-beyond-one-way-functions)
### Authors
* Nir Bitansky, School of Computer Science, Tel Aviv University, Tel Aviv, Israel
* Iftach Haitner, School of Computer Science, Tel Aviv University, Tel Aviv, Israel
* Ilan Komargodski, Cornell Tech, New York, NY, USA
* Eylon Yogev, Technion, Haifa, Israel
### Abstract
> Distributional collision resistance is a relaxation of collision resistance that only requires that it is hard to sample a collision (x, y) where x is uniformly random and y is uniformly random conditioned on colliding with x. The notion lies between one-wayness and collision resistance, but its exact power is still not well-understood. On one hand, distributional collision resistant hash functions cannot be built from one-way functions in a black-box way, which may suggest that they are stronger. On the other hand, so far, they have not yielded any applications beyond one-way functions.
> 
> Assuming distributional collision resistant hash functions, we construct constant-round statistically hiding commitment scheme. Such commitments are not known based on one-way functions, and are impossible to obtain from one-way functions in a black-box way. Our construction relies on the reduction from inaccessible entropy generators to statistically hiding commitments by Haitner et al. (STOC ’09). In the converse direction, we show that two-message statistically hiding commitments imply distributional collision resistance, thereby establishing a loose equivalence between the two notions.
> 
> A corollary of the first result is that constant-round statistically hiding commitments are implied by average-case hardness in the class \({\textsf {SZK}}\) (which is known to imply distributional collision resistance). This implication seems to be folklore, but to the best of our knowledge has not been proven explicitly. We provide yet another proof of this implication, which is arguably more direct than the one going through distributional collision resistance.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_23](https://doi.org/10.1007/978-3-030-17659-4_23)
## Multi-target Attacks on the Picnic Signature Scheme and Related Protocols.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#multi-target-attacks-on-the-picnic-signature-scheme-and-related-protocols)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#multi-target-attacks-on-the-picnic-signature-scheme-and-related-protocols)
### Authors
* Itai Dinur, Department of Computer Science, Ben-Gurion University, Beersheba, Israel
* Niv Nadler, Beersheba, Israel
### Abstract
> Picnic is a signature scheme that was presented at ACM CCS 2017 by Chase et al. and submitted to NIST’s post-quantum standardization project. Among all submissions to NIST’s project, Picnic is one of the most innovative, making use of recent progress in construction of practically efficient zero-knowledge (ZK) protocols for general circuits.
> 
> In this paper, we devise multi-target attacks on Picnic and its underlying ZK protocol, ZKB++. Given access to S signatures, produced by a single or by several users, our attack can (information theoretically) recover the \(\kappa \)-bit signing key of a user in complexity of about \(2^{\kappa - 7}/S\). This is faster than Picnic’s claimed \(2^{\kappa }\) security against classical (non-quantum) attacks by a factor of \(2^7 \cdot S\) (as each signature contains about \(2^7\) attack targets).
> 
> Whereas in most multi-target attacks, the attacker can easily sort and match the available targets, this is not the case in our attack on Picnic, as different bits of information are available for each target. Consequently, it is challenging to reach the information theoretic complexity in a computational model, and we had to perform cryptanalytic optimizations by carefully analyzing ZKB++ and its underlying circuit. Our best attack for \(\kappa = 128\) has time complexity of \(T = 2^{77}\) for \(S = 2^{64}\). Alternatively, we can reach the information theoretic complexity of \(T = 2^{64}\) for \(S = 2^{57}\), given that all signatures are produced with the same signing key.
> 
> Our attack exploits a weakness in the way that the Picnic signing algorithm uses a pseudo-random generator. The weakness is fixed in the recent Picnic 2.0 version.
> 
> In addition to our attack on Picnic, we show that a recently proposed improvement of the ZKB++ protocol (due to Katz, Kolesnikov and Wang) is vulnerable to a similar multi-target attack.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_24](https://doi.org/10.1007/978-3-030-17659-4_24)
## Durandal: A Rank Metric Based Signature Scheme.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#durandal-a-rank-metric-based-signature-scheme)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#durandal-a-rank-metric-based-signature-scheme)
### Authors
* Nicolas Aragon, XLIM-DMI, University of Limoges, 123 Avenue Albert Thomas, 87060, Limoges Cedex, France
* Olivier Blazy, XLIM-DMI, University of Limoges, 123 Avenue Albert Thomas, 87060, Limoges Cedex, France
* Philippe Gaborit, XLIM-DMI, University of Limoges, 123 Avenue Albert Thomas, 87060, Limoges Cedex, France
* Adrien Hauteville, XLIM-DMI, University of Limoges, 123 Avenue Albert Thomas, 87060, Limoges Cedex, France
* Gilles Zémor, Université de Bordeaux, Institut de Mathématiques, UMR 5251, 351 cours de la Libération, 33400, Talence, France
### Abstract
> We describe a variation of the Schnorr-Lyubashevsky approach to devising signature schemes that is adapted to rank based cryptography. This new approach enables us to obtain a randomization of the signature, which previously seemed difficult to derive for code-based cryptography. We provide a detailed analysis of attacks and an EUF-CMA proof for our scheme. Our scheme relies on the security of the Ideal Rank Support Learning and the Ideal Rank Syndrome problems and a newly introduced problem: Product Spaces Subspaces Indistinguishability, for which we give a detailed analysis. Overall the parameters we propose are efficient and comparable in terms of signature size to the Dilithium lattice-based scheme, with a signature size of 4 kB for a public key of size less than 20 kB.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_25](https://doi.org/10.1007/978-3-030-17659-4_25)
## SeaSign: Compact Isogeny Signatures from Class Group Actions.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#seasign-compact-isogeny-signatures-from-class-group-actions)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#seasign-compact-isogeny-signatures-from-class-group-actions)
### Authors
* Luca De Feo, Université Paris-Saclay – UVSQ, LMV, UMR CNRS 8100, Versailles, France
* Steven D. Galbraith, Mathematics Department, University of Auckland, Auckland, New Zealand
### Abstract
> We give a new signature scheme for isogenies that combines the class group actions of CSIDH with the notion of Fiat-Shamir with aborts. Our techniques allow to have signatures of size less than one kilobyte at the 128-bit security level, even with tight security reduction (to a non-standard problem) in the quantum random oracle model. Hence our signatures are potentially shorter than lattice signatures, but signing and verification are currently very expensive.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_26](https://doi.org/10.1007/978-3-030-17659-4_26)
