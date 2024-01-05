# Eurocrypt 23-5
## Unique-Path Identity Based Encryption with Applications to Strongly Secure Messaging.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2023-5.md#unique-path-identity-based-encryption-with-applications-to-strongly-secure-messaging)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2023-5.md#unique-path-identity-based-encryption-with-applications-to-strongly-secure-messaging)
### Authors
* Paul Rösler, FAU Erlangen-Nürnberg, Erlangen, Germany
* Daniel Slamanig, AIT Austrian Institute of Technology, Vienna, Austria
* Christoph Striecks, AIT Austrian Institute of Technology, Vienna, Austria
### Abstract
> Hierarchical Identity Based Encryption (HIBE) is a well studied, versatile tool used in many cryptographic protocols. Yet, since the performance of all known HIBE constructions is broadly considered prohibitive, some real-world applications avoid relying on HIBE at the expense of security. A prominent example for this is secure messaging: Strongly secure messaging protocols are provably equivalent to Key-Updatable Key Encapsulation Mechanisms (KU-KEMs; Balli et al., Asiacrypt 2020); so far, all KU-KEM constructions rely on adaptive unbounded-depth HIBE (Poettering and Rösler, Jaeger and Stepanovs, both CRYPTO 2018). By weakening security requirements for better efficiency, many messaging protocols dispense with using HIBE.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_1](https://doi.org/10.1007/978-3-031-30589-4_1)
## End-to-End Secure Messaging with Traceability Only for Illegal Content.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2023-5.md#end-to-end-secure-messaging-with-traceability-only-for-illegal-content)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2023-5.md#end-to-end-secure-messaging-with-traceability-only-for-illegal-content)
### Authors
* James Bartusek, University of California, Berkeley, USA
* Sanjam Garg, University of California, Berkeley, USA
* Guru-Vamsi Policharla, University of California, Berkeley, USA
* Abhishek Jain, Johns Hopkins University, Baltimore, USA
* Sanjam Garg, NTT Research, Sunnyvale, USA
### Abstract
> As end-to-end encrypted messaging services become widely adopted, law enforcement agencies have increasingly expressed concern that such services interfere with their ability to maintain public safety. Indeed, there is a direct tension between preserving user privacy and enabling content moderation on these platforms. Recent research has begun to address this tension, proposing systems that purport to strike a balance between the privacy of “honest” users and traceability of “malicious” users. Unfortunately, these systems suffer from a lack of protection against malicious or coerced service providers. In this work, we address the privacy vs. content moderation question through the lens of pre-constrained cryptography [Ananth et al., ITCS 2022]. We introduce the notion of set pre-constrained (\(\textsf{SPC}\)) group signatures that guarantees security against malicious key generators. \(\textsf{SPC}\) group signatures offer the ability to trace users in messaging systems who originate pre-defined illegal content (such as child sexual abuse material), while providing security against malicious service providers. We construct concretely efficient protocols for \(\textsf{SPC}\) group signatures, and demonstrate the real-world feasibility of our approach via an implementation. The starting point for our solution is the recently introduced Apple PSI system, which we significantly modify to improve security and expand functionality.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_2](https://doi.org/10.1007/978-3-031-30589-4_2)
## Asymmetric Group Message Franking: Definitions and Constructions.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2023-5.md#asymmetric-group-message-franking-definitions-and-constructions)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2023-5.md#asymmetric-group-message-franking-definitions-and-constructions)
### Authors
* Junzuo Lai, College of Information Science and Technology, Jinan University, Guangzhou, China
* Jian Weng, College of Information Science and Technology, Jinan University, Guangzhou, China
* Gongxian Zeng, Peng Cheng Laboratory, Shenzhen, China
* Zhengan Huang, Peng Cheng Laboratory, Shenzhen, China
* Xin Mu, Peng Cheng Laboratory, Shenzhen, China
* Siu Ming Yiu, The University of Hong Kong, Hong Kong, China
### Abstract
> As online group communication scenarios become more and more common these years, malicious or unpleasant messages are much easier to spread on the internet. Message franking is a crucial cryptographic mechanism designed for content moderation in online end-to-end messaging systems, allowing the receiver of a malicious message to report the message to the moderator. Unfortunately, the existing message franking schemes only consider 1-1 communication scenarios.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_3](https://doi.org/10.1007/978-3-031-30589-4_3)
## Password-Authenticated TLS via OPAQUE and Post-Handshake Authentication.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2023-5.md#password-authenticated-tls-via-opaque-and-post-handshake-authentication)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2023-5.md#password-authenticated-tls-via-opaque-and-post-handshake-authentication)
### Authors
* Julia Hesse, IBM Research Europe – Zurich, Rüschlikon, Switzerland
* Stanislaw Jarecki, UC Irvine, Irvine, USA
* Hugo Krawczyk, Algorand Foundation, Boston, USA
* Christopher Wood, Cloudflare, San Francisco, USA
### Abstract
> OPAQUE is an Asymmetric Password-Authenticated Key Exchange (aPAKE) protocol being standardized by the IETF (Internet Engineering Task Force) as a more secure alternative to the traditional “password-over-TLS” mechanism prevalent in current practice. OPAQUE defends against a variety of vulnerabilities of password-over-TLS by dispensing with reliance on PKI and TLS security, and ensuring that the password is never visible to servers or anyone other than the client machine where the password is entered. In order to facilitate the use of OPAQUE in practice, integration of OPAQUE with TLS is needed. The main proposal for standardizing such integration uses the Exported Authenticators (TLS-EA) mechanism of TLS 1.3 that supports post-handshake authentication and allows for a smooth composition with OPAQUE. We refer to this composition as TLS-OPAQUE and present a detailed security analysis for it in the Universal Composability (UC) framework.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_4](https://doi.org/10.1007/978-3-031-30589-4_4)
## Randomized Half-Ideal Cipher on Groups with Applications to UC (a)PAKE.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2023-5.md#randomized-half-ideal-cipher-on-groups-with-applications-to-uc-a-pake)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2023-5.md#randomized-half-ideal-cipher-on-groups-with-applications-to-uc-a-pake)
### Authors
* Bruno Freitas Dos Santos, University of California, Irvine, Irvine, USA
* Yanqi Gu, University of California, Irvine, Irvine, USA
* Stanislaw Jarecki, University of California, Irvine, Irvine, USA
### Abstract
> An Ideal Cipher (IC) is a cipher where each key defines a random permutation on the domain. Ideal Cipher on a group has many attractive applications, e.g., the Encrypted Key Exchange (EKE) protocol for Password Authenticated Key Exchange (PAKE) [8], or asymmetric PAKE (aPAKE) [31, 33]. However, known constructions for IC on a group domain all have drawbacks, including key leakage from timing information [12], requiring 4 hash-onto-group operations if IC is an 8-round Feistel [22], and limiting the domain to half the group [9] or using variable-time encoding [39, 47] if IC is implemented via (quasi-) bijections from groups to bitstrings [33].

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_5](https://doi.org/10.1007/978-3-031-30589-4_5)
## End-to-End Encrypted Zoom Meetings: Proving Security and Strengthening Liveness.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2023-5.md#end-to-end-encrypted-zoom-meetings-proving-security-and-strengthening-liveness)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2023-5.md#end-to-end-encrypted-zoom-meetings-proving-security-and-strengthening-liveness)
### Authors
* Yevgeniy Dodis, New York University, New York, USA
* Daniel Jost, New York University, New York, USA
* Balachandar Kesavan, Zoom Video Communications, San Jose, USA
* Antonio Marcedone, Zoom Video Communications, San Jose, USA
### Abstract
> In May 2020, Zoom Video Communications, Inc. (Zoom) announced a multi-step plan to comprehensively support end-to-end encrypted (E2EE) group video calls and subsequently rolled out basic E2EE support to customers in October 2020. In this work we provide the first formal security analysis of Zoom’s E2EE protocol, and also lay foundation to the general problem of E2EE group video communication.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_6](https://doi.org/10.1007/978-3-031-30589-4_6)
## Caveat Implementor! Key Recovery Attacks on MEGA.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2023-5.md#caveat-implementor-key-recovery-attacks-on-mega)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2023-5.md#caveat-implementor-key-recovery-attacks-on-mega)
### Authors
* Martin R. Albrecht, King’s College London, London, UK
* Miro Haller, Applied Cryptography Group, ETH Zurich, Zurich, Switzerland
* Kenneth G. Paterson, Applied Cryptography Group, ETH Zurich, Zurich, Switzerland
* Lenka Mareková, Information Security Group, Royal Holloway, University of London, London, UK
### Abstract
> MEGA is a large-scale cloud storage and communication platform that aims to provide end-to-end encryption for stored data. A recent analysis by Backendal, Haller and Paterson (IEEE S &P 2023) invalidated these security claims by presenting practical attacks against MEGA that could be mounted by the MEGA service provider. In response, the MEGA developers added lightweight sanity checks on the user RSA private keys used in MEGA, sufficient to prevent the previous attacks.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_7](https://doi.org/10.1007/978-3-031-30589-4_7)
## Finding Many Collisions via Reusable Quantum Walks - Application to Lattice Sieving.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2023-5.md#finding-many-collisions-via-reusable-quantum-walks-application-to-lattice-sieving)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2023-5.md#finding-many-collisions-via-reusable-quantum-walks-application-to-lattice-sieving)
### Authors
* Xavier Bonnetain, Université de Lorraine, CNRS, Inria, Nancy, France
* André Chailloux, Inria, Paris, France
* André Schrottenloher, Inria, Univ. Rennes, IRISA, Rennes, France
* Yixin Shen, Royal Holloway, University of London, Egham, UK
### Abstract
> Given a random function f with domain \([2^n]\) and codomain \([2^m]\), with \(m \ge n\), a collision of f is a pair of distinct inputs with the same image. Collision finding is an ubiquitous problem in cryptanalysis, and it has been well studied using both classical and quantum algorithms. Indeed, the quantum query complexity of the problem is well known to be \(\varTheta (2^{m/3})\), and matching algorithms are known for any value of m.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_8](https://doi.org/10.1007/978-3-031-30589-4_8)
## Just How Hard Are Rotations of $\mathbb {Z}^n$? Algorithms and Cryptography with the Simplest Lattice.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2023-5.md#just-how-hard-are-rotations-of-mathbb-z-n-algorithms-and-cryptography-with-the-simplest-lattice)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2023-5.md#just-how-hard-are-rotations-of-mathbb-z-n-algorithms-and-cryptography-with-the-simplest-lattice)
### Authors
* Atul Ganju, Cornell University, Ithaca, USA
* Noah Stephens-Davidowitz, Cornell University, Ithaca, USA
* Huck Bennett, Oregon State University, Corvallis, USA
* Pura Peetathawatchai, Stanford University, Stanford, USA
### Abstract
> We study the computational problem of finding a shortest non-zero vector in a rotation of \(\mathbb {Z}^n\), which we call \(\mathbb {Z}\)SVP. It has been a long-standing open problem to determine if a polynomial-time algorithm for \(\mathbb {Z}\)SVP exists, and there is by now a beautiful line of work showing how to solve it efficiently in certain very special cases. However, despite all of this work, the fastest known algorithm that is proven to solve \(\mathbb {Z}\)SVP is still simply the fastest known algorithm for solving SVP (i.e., the problem of finding shortest non-zero vectors in arbitrary lattices), which runs in \(2^{n + o(n)}\) time.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_9](https://doi.org/10.1007/978-3-031-30589-4_9)
## M-SIDH and MD-SIDH: Countering SIDH Attacks by Masking Information.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2023-5.md#m-sidh-and-md-sidh-countering-sidh-attacks-by-masking-information)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2023-5.md#m-sidh-and-md-sidh-countering-sidh-attacks-by-masking-information)
### Authors
* Tako Boris Fouotsa, LASEC-EPFL, Lausanne, Switzerland
* Tomoki Moriya, The University of Tokyo, Tokyo, Japan
* Christophe Petit, Université Libre de Bruxelles, Brussels, Belgium
* Christophe Petit, University of Birmingham, Birmingham, UK
### Abstract
> The SIDH protocol is an isogeny-based key exchange protocol using supersingular isogenies, designed by Jao and De Feo in 2011. The protocol underlies the SIKE algorithm which advanced to the fourth round of NIST’s post-quantum standardization project in May 2022. The algorithm was considered very promising: indeed the most significant attacks against SIDH were meet-in-the-middle variants with exponential complexity, and torsion point attacks which only applied to unbalanced parameters (and in particular, not to SIKE).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_10](https://doi.org/10.1007/978-3-031-30589-4_10)
## Disorientation Faults in CSIDH.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2023-5.md#disorientation-faults-in-csidh)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2023-5.md#disorientation-faults-in-csidh)
### Authors
* Gustavo Banegas, Inria and Laboratoire d’Informatique de l’Ecole polytechnique, Institut Polytechnique de Paris, Palaiseau, France
* Juliane Krämer, University of Regensburg, Regensburg, Germany
* Michael Meyer, University of Regensburg, Regensburg, Germany
* Tanja Lange, Eindhoven University of Technology, Eindhoven, The Netherlands
* Tanja Lange, Academia Sinica, Taipei, Taiwan
* Lorenz Panny, Academia Sinica, Taipei, Taiwan
* Krijn Reijnders, Radboud University, Nijmegen, The Netherlands
* Monika Trimoska, Radboud University, Nijmegen, The Netherlands
* Jana Sotáková, University of Amsterdam and QuSoft, Amsterdam, The Netherlands
### Abstract
> We investigate a new class of fault-injection attacks against the CSIDH family of cryptographic group actions. Our disorientation attacks effectively flip the direction of some isogeny steps. We achieve this by faulting a specific subroutine, connected to the Legendre symbol or Elligator computations performed during the evaluation of the group action. These subroutines are present in almost all known CSIDH implementations. Post-processing a set of faulty samples allows us to infer constraints on the secret key. The details are implementation specific, but we show that in many cases, it is possible to recover the full secret key with only a modest number of successful fault injections and modest computational resources. We provide full details for attacking the original CSIDH proof-of-concept software as well as the CTIDH constant-time implementation. Finally, we present a set of lightweight countermeasures against the attack and discuss their security.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_11](https://doi.org/10.1007/978-3-031-30589-4_11)
## On the Hardness of the Finite Field Isomorphism Problem.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2023-5.md#on-the-hardness-of-the-finite-field-isomorphism-problem)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2023-5.md#on-the-hardness-of-the-finite-field-isomorphism-problem)
### Authors
* Dipayan Das, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Antoine Joux, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### Abstract
> The finite field isomorphism \((\textsf{FFI})\) problem was introduced in PKC’18, as an alternative to average-case lattice problems (like \(\textsf{LWE}\), \(\textsf{SIS}\), or \(\textsf{NTRU}\)). As an application, the same paper used the \(\textsf{FFI}\) problem to construct a fully homomorphic encryption scheme. In this work, we prove that the decision variant of the \(\textsf{FFI}\) problem can be solved in polynomial time for any field characteristics \(q= \varOmega (\beta n^2)\), where \(q,\beta ,n\) parametrize the \(\textsf{FFI}\) problem. Then we use our result from the \(\textsf{FFI}\) distinguisher to propose polynomial-time attacks on the semantic security of the fully homomorphic encryption scheme. Furthermore, for completeness, we also study the search variant of the \(\textsf{FFI}\) problem and show how to state it as a q-ary lattice problem, which was previously unknown. As a result, we can solve the search problem for some previously intractable parameters using a simple lattice reduction approach.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_12](https://doi.org/10.1007/978-3-031-30589-4_12)
## New Time-Memory Trade-Offs for Subset Sum - Improving ISD in Theory and Practice.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2023-5.md#new-time-memory-trade-offs-for-subset-sum-improving-isd-in-theory-and-practice)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2023-5.md#new-time-memory-trade-offs-for-subset-sum-improving-isd-in-theory-and-practice)
### Authors
* Andre Esser, Technology Innovation Institute, Abu Dhabi, UAE
* Floyd Zweydinger, Ruhr University Bochum, Bochum, Germany
### Abstract
> We propose new time-memory trade-offs for the random subset sum problem defined on \((a_1,\ldots ,a_n,t)\) over \(\mathbb {Z}_{2^n}\). Our trade-offs yield significant running time improvements for every fixed memory limit \(M\ge 2^{0.091n}\). Furthermore, we interpolate to the running times of the fastest known algorithms when memory is not limited. Technically, our design introduces a pruning strategy to the construction by Becker-Coron-Joux (BCJ) that allows for an exponentially small success probability. We compensate for this reduced probability by multiple randomized executions. Our main improvement stems from the clever reuse of parts of the computation in subsequent executions to reduce the time complexity per iteration.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_13](https://doi.org/10.1007/978-3-031-30589-4_13)
## A New Algebraic Approach to the Regular Syndrome Decoding Problem and Implications for PCG Constructions.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2023-5.md#a-new-algebraic-approach-to-the-regular-syndrome-decoding-problem-and-implications-for-pcg-constructions)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2023-5.md#a-new-algebraic-approach-to-the-regular-syndrome-decoding-problem-and-implications-for-pcg-constructions)
### Authors
* Pierre Briaud, Sorbonne Universités, UPMC Univ Paris 06, Paris, France
* Pierre Briaud, Inria, Team COSMIQ, Paris, France
* Morten Øygarden, Simula UiB, Bergen, Norway
### Abstract
> The Regular Syndrome Decoding (RSD) problem, a variant of the Syndrome Decoding problem with a particular error distribution, was introduced almost 20 years ago by Augot et al.. In this problem, the error vector is divided into equally sized blocks, each containing a single noisy coordinate. More recently, the last five years have seen increased interest in this assumption due to its use in MPC and ZK applications. Generally referred to as “LPN with regular noise" in this context, the assumption allows to achieve better efficiency when compared to plain LPN. In all previous works of cryptanalysis, it has not been shown how to exploit the special feature of this problem in an attack.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_14](https://doi.org/10.1007/978-3-031-30589-4_14)
## An Efficient Key Recovery Attack on SIDH.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2023-5.md#an-efficient-key-recovery-attack-on-sidh)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2023-5.md#an-efficient-key-recovery-attack-on-sidh)
### Authors
* Wouter Castryck, imec-COSIC, KU Leuven, Leuven, Belgium
* Thomas Decru, imec-COSIC, KU Leuven, Leuven, Belgium
* Wouter Castryck, Vakgroep Wiskunde: Algebra en Meetkunde, Universiteit Gent, Ghent, Belgium
### Abstract
> We present an efficient key recovery attack on the Supersingular Isogeny Diffie–Hellman protocol (SIDH). The attack is based on Kani’s “reducibility criterion” for isogenies from products of elliptic curves and strongly relies on the torsion point images that Alice and Bob exchange during the protocol. If we assume knowledge of the endomorphism ring of the starting curve then the classical running time is polynomial in the input size (heuristically), apart from the factorization of a small number of integers that only depend on the system parameters. The attack is particularly fast and easy to implement if one of the parties uses 2-isogenies and the starting curve comes equipped with a non-scalar endomorphism of very small degree; this is the case for SIKE, the instantiation of SIDH that recently advanced to the fourth round of NIST’s standardization effort for post-quantum cryptography. Our Magma implementation breaks SIKEp434, which aims at security level 1, in about ten minutes on a single core.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_15](https://doi.org/10.1007/978-3-031-30589-4_15)
## A Direct Key Recovery Attack on SIDH.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2023-5.md#a-direct-key-recovery-attack-on-sidh)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2023-5.md#a-direct-key-recovery-attack-on-sidh)
### Authors
* Luciano Maino, University of Bristol, Bristol, UK
* Chloe Martindale, University of Bristol, Bristol, UK
* Giacomo Pope, University of Bristol, Bristol, UK
* Lorenz Panny, Academia Sinica, Taipei, Taiwan
* Giacomo Pope, NCC Group, Cheltenham, UK
* Benjamin Wesolowski, Univ. Bordeaux, CNRS, Bordeaux INP, IMB, UMR 5251, 33400, Talence, France
* Benjamin Wesolowski, INRIA, IMB, UMR 5251, 33400, Talence, France
* Benjamin Wesolowski, ENS de Lyon, CNRS, UMPA, UMR 5669, Lyon, France
### Abstract
> We present an attack on SIDH utilising isogenies between polarized products of two supersingular elliptic curves. In the case of arbitrary starting curve, our attack (discovered independently from [8]) has subexponential complexity, thus significantly reducing the security of SIDH and SIKE. When the endomorphism ring of the starting curve is known, our attack (here derived from [8]) has polynomial-time complexity assuming the generalised Riemann hypothesis. Our attack applies to any isogeny-based cryptosystem that publishes the images of points under the secret isogeny, for example Séta [13] and B-SIDH [11]. It does not apply to CSIDH [9], CSI-FiSh [3], or SQISign [14].

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_16](https://doi.org/10.1007/978-3-031-30589-4_16)
## Breaking SIDH in Polynomial Time.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2023-5.md#breaking-sidh-in-polynomial-time)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2023-5.md#breaking-sidh-in-polynomial-time)
### Authors
* Damien Robert, INRIA Bordeaux-Sud-Ouest, 200 Avenue de la Vieille Tour, 33405, Talence Cedex, France
* Damien Robert, Institut de Mathématiques de Bordeaux, 351 cours de la liberation, 33405, Talence Cedex, France
### Abstract
> We show that we can break SIDH in (classical) polynomial time, even with a random starting curve \(E_0\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_17](https://doi.org/10.1007/978-3-031-30589-4_17)
## A Lower Bound on the Length of Signatures Based on Group Actions and Generic Isogenies.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2023-5.md#a-lower-bound-on-the-length-of-signatures-based-on-group-actions-and-generic-isogenies)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2023-5.md#a-lower-bound-on-the-length-of-signatures-based-on-group-actions-and-generic-isogenies)
### Authors
* Dan Boneh, Stanford University, Stanford, USA
* Jiaxin Guan, Princeton University, Princeton, USA
* Mark Zhandry, Princeton University, Princeton, USA
* Mark Zhandry, NTT Research, Inc., Sunnyvale, USA
### Abstract
> We give the first black box lower bound for signature protocols that can be described as group actions, which include many based on isogenies. We show that, for a large class of signature schemes making black box use of a (potentially non-abelian) group action, the signature length must be \(\varOmega (\lambda ^2/\log \lambda )\). Our class of signatures generalizes all known signatures that derive security exclusively from the group action, and our lower bound matches the state of the art, showing that the signature length cannot be improved without deviating from the group action framework.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_18](https://doi.org/10.1007/978-3-031-30589-4_18)
## Short Signatures from Regular Syndrome Decoding in the Head.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2023-5.md#short-signatures-from-regular-syndrome-decoding-in-the-head)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2023-5.md#short-signatures-from-regular-syndrome-decoding-in-the-head)
### Authors
* Eliana Carozza, IRIF, Université Paris Cité, Paris, France
* Geoffroy Couteau, CNRS, IRIF, Université Paris Cité, Paris, France
* Antoine Joux, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### Abstract
> We introduce a new candidate post-quantum digital signature scheme from the regular syndrome decoding (RSD) assumption, an established variant of the syndrome decoding assumption which asserts that it is hard to find \(w \)-regular solutions to systems of linear equations over \(\mathbb {F}_2\) (a vector is regular if it is a concatenation of \(w \) unit vectors). Our signature is obtained by introducing and compiling a new 5-round zero-knowledge proof system constructed using the MPC-in-the-head paradigm. At the heart of our result is an efficient MPC protocol in the preprocessing model that checks correctness of a regular syndrome decoding instance by using a share ring-conversion mechanism.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_19](https://doi.org/10.1007/978-3-031-30589-4_19)
## The Return of the SDitH.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2023-5.md#the-return-of-the-sdith)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2023-5.md#the-return-of-the-sdith)
### Authors
* Carlos Aguilar-Melchor, SandboxAQ, Palo Alto, USA
* Nicolas Gama, SandboxAQ, Palo Alto, USA
* James Howe, SandboxAQ, Palo Alto, USA
* David Joseph, SandboxAQ, Palo Alto, USA
* Dongze Yue, SandboxAQ, Palo Alto, USA
* Andreas Hülsing, Eindhoven University of Technology, Eindhoven, The Netherlands
### Abstract
> This paper presents a code-based signature scheme based on the well-known syndrome decoding (SD) problem. The scheme builds upon a recent line of research which uses the Multi-Party-Computation-in-the-Head (MPCitH) approach to construct efficient zero-knowledge proofs, such as Syndrome Decoding in the Head (SDitH), and builds signature schemes from them using the Fiat-Shamir transform.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_20](https://doi.org/10.1007/978-3-031-30589-4_20)
## Chopsticks: Fork-Free Two-Round Multi-signatures from Non-interactive Assumptions.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2023-5.md#chopsticks-fork-free-two-round-multi-signatures-from-non-interactive-assumptions)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2023-5.md#chopsticks-fork-free-two-round-multi-signatures-from-non-interactive-assumptions)
### Authors
* Jiaxin Pan, NTNU – Norwegian University of Science and Technology, Trondheim, Norway
* Benedikt Wagner, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Benedikt Wagner, Saarland University, Saarbrücken, Germany
### Abstract
> Multi-signatures have been drawing lots of attention in recent years, due to their applications in cryptocurrencies. Most early constructions require three-round signing, and recent constructions have managed to reduce the round complexity to two. However, their security proofs are mostly based on non-standard, interactive assumptions (e.g. one-more assumptions) and come with a huge security loss, due to multiple uses of rewinding (aka the Forking Lemma). This renders the quantitative guarantees given by the security proof useless.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_21](https://doi.org/10.1007/978-3-031-30589-4_21)
## Threshold and Multi-signature Schemes from Linear Hash Functions.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2023-5.md#threshold-and-multi-signature-schemes-from-linear-hash-functions)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2023-5.md#threshold-and-multi-signature-schemes-from-linear-hash-functions)
### Authors
* Stefano Tessaro, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Chenzhi Zhu, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
### Abstract
> This paper gives new constructions of two-round multi-signa-tures and threshold signatures for which security relies solely on either the hardness of the (plain) discrete logarithm problem or the hardness of RSA, in addition to assuming random oracles. Their signing protocol is partially non-interactive, i.e., the first round of the signing protocol is independent of the message being signed.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_22](https://doi.org/10.1007/978-3-031-30589-4_22)
## New Algorithms for the Deuring Correspondence - Towards Practical and Secure SQISign Signatures.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2023-5.md#new-algorithms-for-the-deuring-correspondence-towards-practical-and-secure-sqisign-signatures)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2023-5.md#new-algorithms-for-the-deuring-correspondence-towards-practical-and-secure-sqisign-signatures)
### Authors
* Luca De Feo, IBM Research Europe, Zürich, Switzerland
* Antonin Leroux, DGA-MI, Bruz, France
* Antonin Leroux, IRMAR, Université de Rennes, Rennes, France
* Antonin Leroux, LIX, CNRS, Ecole Polytechnique, Institut Polytechnique de Paris, Palaiseau, France
* Antonin Leroux, INRIA, Saclay, France
* Patrick Longa, Microsoft Research, Redmond, USA
* Benjamin Wesolowski, Univ. Bordeaux, CNRS, Bordeaux INP, IMB, UMR 5251, 33400, Talence, France
* Benjamin Wesolowski, INRIA, IMB, UMR 5251, 33400, Talence, France
* Benjamin Wesolowski, ENS de Lyon, CNRS, UMPA, UMR 5669, Lyon, France
### Abstract
> The Deuring correspondence defines a bijection between isogenies of supersingular elliptic curves and ideals of maximal orders in a quaternion algebra. We present a new algorithm to translate ideals of prime-power norm to their corresponding isogenies — a central task of the effective Deuring correspondence. The new method improves upon the algorithm introduced in 2021 by De Feo, Kohel, Leroux, Petit and Wesolowski as a building-block of the SQISign signature scheme. SQISign is the most compact post-quantum signature scheme currently known, but is several orders of magnitude slower than competitors, the main bottleneck of the computation being the ideal-to-isogeny translation. We implement the new algorithm and apply it to SQISign, achieving a more than two-fold speedup in key generation and signing with a new choice of parameter. Moreover, after adapting the state-of-the-art \(\mathbb {F}_{p^2}\) multiplication algorithms by Longa to implement SQISign’s underlying extension field arithmetic and adding various improvements, we push the total speedups to over three times for signing and four times for verification.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_23](https://doi.org/10.1007/978-3-031-30589-4_23)
## Revisiting BBS Signatures.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2023-5.md#revisiting-bbs-signatures)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2023-5.md#revisiting-bbs-signatures)
### Authors
* Stefano Tessaro, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Chenzhi Zhu, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
### Abstract
> BBS signatures were implicitly proposed by Boneh, Boyen, and Shacham (CRYPTO ’04) as part of their group signature scheme, and explicitly cast as stand-alone signatures by Camenisch and Lysyanskaya (CRYPTO ’04). A provably secure version, called BBS+, was then devised by Au, Susilo, and Mu (SCN ’06), and is currently the object of a standardization effort which has led to a recent RFC draft. BBS+ signatures are suitable for use within anonymous credential and DAA systems, as their algebraic structure enables efficient proofs of knowledge of message-signature pairs that support partial disclosure.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_24](https://doi.org/10.1007/978-3-031-30589-4_24)
## Non-interactive Blind Signatures for Random Messages.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2023-5.md#non-interactive-blind-signatures-for-random-messages)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2023-5.md#non-interactive-blind-signatures-for-random-messages)
### Authors
* Lucjan Hanzlik, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### Abstract
> Blind signatures allow a signer to issue signatures on messages chosen by the signature recipient. The main property is that the recipient’s message is hidden from the signer. There are many applications, including Chaum’s e-cash system and Privacy Pass, where no special distribution of the signed message is required, and the message can be random. Interestingly, existing notions do not consider this practical use case separately. In this paper, we show that constraining the recipient’s choice over the message distribution spawns a surprising new primitive that improves the well-established state-of-the-art. We formalize this concept by introducing the notion of non-interactive blind signatures (\(\textsf{NIBS}\)). Informally, the signer can create a presignature with a specific recipient in mind, identifiable via a public key. The recipient can use her secret key to finalize it and receive a blind signature on a random message determined by the finalization process. The key idea is that online interaction between the signer and recipient is unnecessary. We show an efficient instantiation of \(\textsf{NIBS}\) in the random oracle model from signatures on equivalence classes. The exciting part is that, in this case, for the recipient’s public key, we can use preexisting keys for Schnorr, ECDSA signatures, El-Gamal encryption scheme or even the Diffie-Hellman key exchange. Reusing preexisting public keys allows us to distribute anonymous tokens similarly to cryptocurrency airdropping. Additional contributions include tagged non-interactive blind signatures (\(\textsf{TNIBS}\)) and their efficient instantiation. A generic construction in the random oracle or common reference string model based on verifiable random functions, standard signatures, and non-interactive proof systems.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_25](https://doi.org/10.1007/978-3-031-30589-4_25)
## Rai-Choo! Evolving Blind Signatures to the Next Level.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2023-5.md#rai-choo-evolving-blind-signatures-to-the-next-level)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2023-5.md#rai-choo-evolving-blind-signatures-to-the-next-level)
### Authors
* Lucjan Hanzlik, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Julian Loss, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Benedikt Wagner, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Benedikt Wagner, Saarland University, Saarbrücken, Germany
### Abstract
> Blind signatures are a fundamental tool for privacy-preserving applications. Known constructions of concurrently secure blind signature schemes either are prohibitively inefficient or rely on non-standard assumptions, even in the random oracle model. A recent line of work (ASIACRYPT ‘21, CRYPTO ‘22) initiated the study of concretely efficient schemes based on well-understood assumptions in the random oracle model. However, these schemes still have several major drawbacks: 1) The signer is required to keep state; 2) The computation grows linearly with the number of signing interactions, making the schemes impractical; 3) The schemes require at least five moves of interaction.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_26](https://doi.org/10.1007/978-3-031-30589-4_26)
