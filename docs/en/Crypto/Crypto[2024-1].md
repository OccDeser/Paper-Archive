# Crypto[2024-1]
## Loquat: A SNARK-Friendly Post-quantum Signature Based on the Legendre PRF with Applications in Ring and Aggregate Signatures.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-1].md#loquat-a-snark-friendly-post-quantum-signature-based-on-the-legendre-prf-with-applications-in-ring-and-aggregate-signatures)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#loquat-a-snark-friendly-post-quantum-signature-based-on-the-legendre-prf-with-applications-in-ring-and-aggregate-signatures)
### Authors
* Xinyu Zhang, Monash University, Melbourne, Australia
* Ron Steinfeld, Monash University, Melbourne, Australia
* Muhammed F. Esgin, Monash University, Melbourne, Australia
* Joseph K. Liu, Monash University, Melbourne, Australia
* Xinyu Zhang, Data61, CSIRO, Sydney, Australia
* Dongxi Liu, Data61, CSIRO, Sydney, Australia
* Sushmita Ruj, University of New South Wales, Sydney, Australia
### Abstract
> We design and implement a novel post-quantum signature scheme based on the Legendre PRF, named Loquat. Prior to this work, efficient approaches for constructing post-quantum signatures with comparable security assumptions mainly used the MPC-in-the-head paradigm or hash trees. Our method departs from these paradigms and, notably, is SNARK-friendly, a feature not commonly found in earlier designs. Loquat requires significantly fewer computational operations for verification than other symmetric-key-based post-quantum signature schemes that support stateless signing. Our Python implementation of Loquat demonstrate a signature size of 46KB, with a signing time of 5.04 s and a verification time of 0.21 s. Instantiating the random oracle with an algebraic hash function results in the R1CS constraints for signature verification being about 148K, 7 to 175 times smaller than those required for MPC-in-the-head-based signatures and 3 to 9 times less than those for SPHINCS+ [Bernstein et al. CCS’19].
> 
> We explore two applications of Loquat. First, we incorporate it into the ID-based ring signature scheme [Buser et al. ACNS’22], achieving a significant reduction in signature size from 1.9 MB to 0.9 MB with stateless signing and practical master key generation. Our second application presents a SNARK-based aggregate signature scheme. We use the implementations of Aurora [Ben-Sasson et al. EC’19] and Fractal [Chiesa et al. EC’20] to benchmark our aggregate signature’s performance. Our findings show that aggregating 32 Loquat signatures using Aurora results in a proving time of about 7 min, a verification time of 66 s, and an aggregate signature size of 197 KB. Furthermore, by leveraging the recursive proof composition feature of Fractal, we achieve an aggregate signature with a constant size of 145 KB, illustrating Loquat’s potential for scalability in cryptographic applications.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_1](https://doi.org/10.1007/978-3-031-68376-3_1)
## MPC in the Head Using the Subfield Bilinear Collision Problem.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-1].md#mpc-in-the-head-using-the-subfield-bilinear-collision-problem)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#mpc-in-the-head-using-the-subfield-bilinear-collision-problem)
### Authors
* Janik Huth, CISPA - Helmholtz Center for Information Security, Saarbrücken, Germany
* Antoine Joux, CISPA - Helmholtz Center for Information Security, Saarbrücken, Germany
* Janik Huth, Saarland University, Saarbrücken, Germany
### Abstract
> In this paper, we introduce the subfield bilinear collision problem and use it to construct an identification protocol and a signature scheme. This construction is based on the MPC-in-the-head paradigm and uses the Fiat-Shamir transformation to obtain a signature.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_2](https://doi.org/10.1007/978-3-031-68376-3_2)
## Aggregating Falcon Signatures with LaBRADOR.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-1].md#aggregating-falcon-signatures-with-labrador)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#aggregating-falcon-signatures-with-labrador)
### Authors
* Marius A. Aardal, Aarhus University, Aarhus, Denmark
* Diego F. Aranha, Aarhus University, Aarhus, Denmark
* Sebastian Kolby, Aarhus University, Aarhus, Denmark
* Katharina Boudgoust, CNRS, Univ Montpellier, LIRMM, Montpellier, France
* Akira Takahashi, J.P.Morgan AI Research & AlgoCRYPT CoE, New York, USA
### Abstract
> Several prior works have suggested to use non-interactive arguments of knowledge with short proofs to aggregate signatures of Falcon, which is part of the first post-quantum signatures selected for standardization by NIST. Especially LaBRADOR, based on standard structured lattice assumptions and published at CRYPTO’23, seems promising to realize this task. However, no prior work has tackled this idea in a rigorous way. In this paper, we thoroughly prove how to aggregate Falcon signatures using LaBRADOR. We start by providing the first complete knowledge soundness analysis for the non-interactive version of LaBRADOR . Here, the multi-round and recursive nature of LaBRADOR requires a complex and thorough analysis. For this purpose, we introduce the notion of predicate special soundness (PSS). This is a general framework for evaluating the knowledge error of complex Fiat-Shamir arguments of knowledge protocols in a modular fashion, which we believe to be of independent interest. We then explain the exact steps to take in order to adapt the non-interactive LaBRADOR proof system for aggregating Falcon signatures and provide concrete proof size estimates. Additionally, we formalize the folklore approach of obtaining aggregate signatures from the class of hash-then-sign signatures through arguments of knowledge.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_3](https://doi.org/10.1007/978-3-031-68376-3_3)
## That's Not My Signature! Fail-Stop Signatures for a Post-quantum World.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-1].md#thats-not-my-signature-fail-stop-signatures-for-a-post-quantum-world)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#thats-not-my-signature-fail-stop-signatures-for-a-post-quantum-world)
### Authors
* Cecilia Boschini, ETH Zürich, Zürich, Switzerland
* Hila Dahari, Weizmann Institute, Rehovot, Israel
* Moni Naor, Weizmann Institute, Rehovot, Israel
* Eyal Ronen, Tel-Aviv University, Tel Aviv, Israel
### Abstract
> The Snowden’s revelations kick-started a community-wide effort to develop cryptographic tools against mass surveillance. In this work, we propose to add another primitive to that toolbox: Fail-Stop Signatures (FSS) [49]. FSS are digital signatures enhanced with a forgery-detection mechanism that can protect a computationally bounded signer from more powerful attackers. Despite the fascinating concept, research in this area stalled after the ’90 s. However, the ongoing transition to post-quantum cryptography, with its hiccups due to the novelty of underlying assumptions, has become the perfect use case for FSS. This paper aims to reboot research on FSS with practical use in mind: Our framework for FSS includes “fine-grained” security definitions (that assume a powerful, but bounded adversary e.g.: can break 128-bit of security, but not 256-bit). As an application, we show new FSS constructions for the post-quantum setting. We show that FSS are equivalent to standard, provably secure digital signatures that do not require rewinding or programming random oracles, and that this implies lattice-based FSS. Our main construction is an FSS version of \(\textsf{SPHINCS}^+\), which required building FSS versions of all its building blocks: \(\textsf{WOTS}^+\), \(\textsf{XMSS}\), and \(\textsf{FORS}\). In the process, we identify and provide generic solutions for two fundamental issues arising when deriving a large number of private keys from a single seed, and when building FSS for Hash-and-Sign-based signatures.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_4](https://doi.org/10.1007/978-3-031-68376-3_4)
## Solving the Tensor Isomorphism Problem for Special Orbits with Low Rank Points: Cryptanalysis and Repair of an Asiacrypt 2023 Commitment Scheme.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-1].md#solving-the-tensor-isomorphism-problem-for-special-orbits-with-low-rank-points-cryptanalysis-and-repair-of-an-asiacrypt-2023-commitment-scheme)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#solving-the-tensor-isomorphism-problem-for-special-orbits-with-low-rank-points-cryptanalysis-and-repair-of-an-asiacrypt-2023-commitment-scheme)
### Authors
* Valerie Gilchrist, Université Libre de Bruxelles, Brussels, Belgium
* Christophe Petit, Université Libre de Bruxelles, Brussels, Belgium
* Laurane Marco, EPFL, Lausanne, Switzerland
* Christophe Petit, University of Birmingham, Birmingham, UK
* Gang Tang, University of Birmingham, Birmingham, UK
* Gang Tang, University of Technology Sydney, Ultimo, NSW, Australia
### Abstract
> The Tensor Isomorphism Problem (TIP) has been shown equivalent to the matrix code equivalence problem, making it an interesting candidate on which to build post-quantum cryptographic primitives. These hard problems have already been used in protocol development. One of these, MEDS, is currently in Round 1 of NIST’s call for additional post-quantum digital signatures.
> 
> In this work, we consider the TIP restricted to the orbits of a special class of tensors. The hardness of the decisional version of this problem is the foundation of a commitment scheme proposed by D’Alconzo, Flamini, and Gangemi (Asiacrypt 2023). We present polynomial-time algorithms for the decisional and computational versions of TIP for special orbits, which implies that the commitment scheme is not secure. The key observations of these algorithms are that these special tensors contain some low-rank points, and their stabilizer groups are not trivial.
> 
> With these new developments in the security of TIP in mind, we give a new commitment scheme based on the general TIP that is non-interactive, post-quantum, and statistically binding, making no new assumptions. Such a commitment scheme does not currently exist in the literature.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_5](https://doi.org/10.1007/978-3-031-68376-3_5)
## Pairing-Free Blind Signatures from CDH Assumptions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-1].md#pairing-free-blind-signatures-from-cdh-assumptions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#pairing-free-blind-signatures-from-cdh-assumptions)
### Authors
* Rutchathon Chairattana-Apirom, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Stefano Tessaro, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Chenzhi Zhu, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
### Abstract
> We present the first concurrently-secure blind signatures making black-box use of a pairing-free group for which unforgeability, in the random oracle model, can be proved without relying on the algebraic group model (AGM), thus resolving a long-standing open question. Prior pairing-free blind signatures without AGM proofs have only been proved secure for bounded concurrency, relied on computationally expensive non-black-box use of NIZKs, or had complexity growing with the number of signing sessions due to the use of boosting techniques.
> 
> Our most efficient constructions rely on the chosen-target CDH assumption and can be seen as blind versions of signatures by Goh and Jarecki (EUROCRYPT ’03) and Chevallier-Mames (CRYPTO ’05). We also give a less efficient scheme with security based on (plain) CDH. The underlying signing protocols consist of four (in order to achieve regular unforgeability) or five moves (for strong unforgeability). All schemes are proved statistically blind in the random oracle model.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_6](https://doi.org/10.1007/978-3-031-68376-3_6)
## Pairing-Free Blind Signatures from Standard Assumptions in the ROM.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-1].md#pairing-free-blind-signatures-from-standard-assumptions-in-the-rom)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#pairing-free-blind-signatures-from-standard-assumptions-in-the-rom)
### Authors
* Julia Kastner, Centrum Wiskunde & Informatica, Amsterdam, The Netherlands
* Julia Kastner, Work done while at ETH Zurich, Zurich, Switzerland
* Michael Reichle, Department of Computer Science, ETH Zürich, Zürich, Switzerland
* Ky Nguyen, DIENS, École normale supérieure, CNRS, Inria, PSL University, Paris, France
* Michael Reichle, Work done partially while at ENS and Inria, Paris, France
### Abstract
> Blind Signatures are a useful primitive for privacy preserving applications such as electronic payments, e-voting, anonymous credentials, and more. However, existing practical blind signature schemes based on standard assumptions require either pairings or lattices. We present the first practical construction of a round-optimal blind signature in the random oracle model based on standard assumptions without resorting to pairings or lattices. In particular, our construction is secure under the strong RSA assumption and DDH (in pairing-free groups). For our construction, we provide a NIZK-friendly signature based on strong RSA, and efficiently instantiate a variant of Fischlin’s generic framework (CRYPTO’06). Our Blind Signature scheme has signatures of size \(4.28\) KB and communication cost \(10.98\) KB. On the way, we develop techniques that might be of independent interest. In particular, we provide efficient relaxed range-proofs for large ranges with subversion zero-knowledge and compact commitments to elements of arbitrary groups.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_7](https://doi.org/10.1007/978-3-031-68376-3_7)
## On the (In)Security of the BUFF Transform.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-1].md#on-the-in-security-of-the-buff-transform)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#on-the-in-security-of-the-buff-transform)
### Authors
* Jelle Don, Centrum Wiskunde & Informatica (CWI), Amsterdam, The Netherlands
* Serge Fehr, Centrum Wiskunde & Informatica (CWI), Amsterdam, The Netherlands
* Yu-Hsuan Huang, Centrum Wiskunde & Informatica (CWI), Amsterdam, The Netherlands
* Serge Fehr, Mathematical Institute, Leiden University, Leiden, The Netherlands
* Patrick Struck, University of Konstanz, Konstanz, Germany
### Abstract
> The BUFF transform is a generic transformation for digital signature schemes, with the purpose of obtaining additional security properties beyond standard unforgeability, e.g., exclusive ownership and non-resignability. In the call for additional post-quantum signatures, these were explicitly mentioned by the NIST as “additional desirable security properties”, and some of the submissions indeed refer to the BUFF transform with the purpose of achieving them, while some other submissions follow the design of the BUFF transform without mentioning it explicitly.
> 
> In this work, we show the following negative results regarding the non-resignability property in general, and the BUFF transform in particular. In the plain model, we observe by means of a simple attack that any signature scheme for which the message has a high entropy given the signature does not satisfy the non-resignability property (while non-resignability is trivially not satisfied if the message can be efficiently computed from its signature). Given that the BUFF transform has high entropy in the message given the signature, it follows that the BUFF transform does not achieve non-resignability whenever the random oracle is instantiated with a hash function, no matter what hash function.
> 
> When considering the random oracle model (ROM), the matter becomes slightly more delicate since prior works did not rigorously define the non-resignability property in the ROM. For the natural extension of the definition to the ROM, we observe that our impossibility result still holds, despite there having been positive claims about the non-resignability of the BUFF transform in the ROM. Indeed, prior claims of the non-resignability of the BUFF transform rely on faulty argumentation.
> 
> On the positive side, we prove that a salted version of the BUFF transform satisfies a slightly weaker variant of non-resignability in the ROM, covering both classical and quantum attacks, if the entropy requirement in the (weakened) definition of non-resignability is statistical; for the computational variant, we show yet another negative result.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_8](https://doi.org/10.1007/978-3-031-68376-3_8)
## Accelerating SLH-DSA by Two Orders of Magnitude with a Single Hash Unit.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-1].md#accelerating-slh-dsa-by-two-orders-of-magnitude-with-a-single-hash-unit)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#accelerating-slh-dsa-by-two-orders-of-magnitude-with-a-single-hash-unit)
### Authors
* Markku-Juhani O. Saarinen, SoC Hub Research Centre, Tampere University, Tampere, Finland
### Abstract
> We report on efficient and secure hardware implementation techniques for the FIPS 205 SLH-DSA Hash-Based Signature Standard. We demonstrate that very significant overall performance gains can be obtained from hardware that optimizes the padding formats and iterative hashing processes specific to SLH-DSA. A prototype implementation, SLotH, contains Keccak/SHAKE, SHA2-256, and SHA2-512 cores and supports all 12 parameter sets of SLH-DSA. SLotH also supports side-channel secure PRF computation and Winternitz chains. SLotH drivers run on a small RISC-V control core, as is common in current Root-of-Trust (RoT) systems.
> 
> The new features make SLH-DSA on SLotH many times faster compared to similarly-sized general-purpose hash accelerators. Compared to unaccelerated microcontroller implementations, the performance of SLotH ’s SHAKE variants is up to \(300\times \) faster; signature generation with 128f parameter set is 4,903,978 cycles, while signature verification with 128 s parameter set is only 179,603 cycles. The SHA2 parameter sets have approximately half of the speed of SHAKE parameter sets. We observe that the signature verification performance of SLH-DSA’s “s” parameter sets is generally better than that of accelerated ECDSA or Dilithium on similarly-sized RoT targets. The area of the full SLotH system is small, from 63 kGE (SHA2, Cat 1 only) to 155 kGe (all parameter sets). Keccak Threshold Implementation adds another 130 kGE.
> 
> We provide sensitivity analysis of SLH-DSA in relation to side-channel leakage. We show experimentally that an SLH-DSA implementation with CPU hashing will rapidly leak the \(\mathsf {SK.seed}\) master key. We perform a 100,000-trace TVLA leakage assessment with a protected SLotH unit.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_9](https://doi.org/10.1007/978-3-031-68376-3_9)
## Ring Signatures for Deniable AKEM: Gandalf's Fellowship.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-1].md#ring-signatures-for-deniable-akem-gandalfs-fellowship)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#ring-signatures-for-deniable-akem-gandalfs-fellowship)
### Authors
* Phillip Gajland, Max Planck Institute for Security and Privacy, Bochum, Germany
* Phillip Gajland, Ruhr-Universität Bochum, Bochum, Germany
* Jonas Janneck, Ruhr-Universität Bochum, Bochum, Germany
* Eike Kiltz, Ruhr-Universität Bochum, Bochum, Germany
### Abstract
> Ring signatures, a cryptographic primitive introduced by Rivest, Shamir and Tauman (ASIACRYPT 2001), offer signer anonymity within dynamically formed user groups. Recent advancements have focused on lattice-based constructions to improve efficiency, particularly for large signing rings. However, current state-of-the-art solutions suffer from significant overhead, especially for smaller rings.
> 
> In this work, we present a novel NTRU-based ring signature scheme, \(\textsc {Gandalf} \), tailored towards small rings. Our post-quantum scheme achieves a 50% reduction in signature sizes compared to the linear ring signature scheme \(\textsc {Raptor} \) (ACNS 2019). When compared to the sublinear ring signature scheme \(\textsc {Smile} \) (CRYPTO 2021), our signatures are more compact for rings of up to 26. In particular, for rings of size two, our ring signatures are only 1236 bytes.
> 
> Additionally, we explore the use of ring signatures to obtain deniability in authenticated key exchange mechanisms (AKEMs), the primitive behind the recent HPKE standard used in MLS and TLS. We take a fine-grained approach at formalising sender deniability within AKEM and seek to define the strongest possible notions. Our contributions extend to a black-box construction of a deniable AKEM from a KEM and a ring signature scheme for rings of size two. Our approach attains the highest level of confidentiality and authenticity, while simultaneously preserving the strongest forms of deniability in two orthogonal settings. Finally, we present parameter sets for our schemes, and show that our deniable AKEM, when instantiated with our ring signature scheme, yields ciphertexts of 2004 bytes.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_10](https://doi.org/10.1007/978-3-031-68376-3_10)
## Polytopes in the Fiat-Shamir with Aborts Paradigm.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-1].md#polytopes-in-the-fiat-shamir-with-aborts-paradigm)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#polytopes-in-the-fiat-shamir-with-aborts-paradigm)
### Authors
* Henry Bambury, DIENS, École normale supérieure, CNRS, Inria, PSL University, Paris, France
* Hugo Beguinet, DIENS, École normale supérieure, CNRS, Inria, PSL University, Paris, France
* Éric Sageloli, DIENS, École normale supérieure, CNRS, Inria, PSL University, Paris, France
* Henry Bambury, DGA, Paris, France
* Hugo Beguinet, Thales, Gennevilliers, France
* Thomas Ricosset, Thales, Gennevilliers, France
* Éric Sageloli, Thales, Gennevilliers, France
* Éric Sageloli, École polytechnique, Institut polytechnique de Paris, Palaiseau, France
### Abstract
> The Fiat-Shamir with Aborts paradigm (FSwA) uses rejection sampling to remove a secret’s dependency on a given source distribution. Recent results revealed that unlike the uniform distribution in the hypercube, both the continuous Gaussian and the uniform distribution within the hyperball minimise the rejection rate and the size of the proof of knowledge. However, in practice both these distributions suffer from the complexity of their sampler. So far, those three distributions are the only available alternatives, but none of them offer the best of all worlds: competitive proof of knowledge size and rejection rate with a simple sampler.
> 
> We introduce a new generic framework for FSwA using polytope based rejection sampling to enable a wider variety of constructions. As a matter of fact, this framework is the first to generalise these results to integral distributions. To complement the lack of alternatives, we also propose a new polytope construction, whose uniform sampler approaches in simplicity that of the hypercube. At the same time, it provides competitive proof of knowledge size compared to that obtained from the Gaussian distribution. Concurrently, we share some experimental improvements of our construction to further reduce the proof size. Finally, we propose a signature based on the FSwA paradigm using both our framework and construction. We prove it to be competitive with Haetae in signature size and with Dilithium on sampler simplicity.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_11](https://doi.org/10.1007/978-3-031-68376-3_11)
## On Round Elimination for Special-Sound Multi-round Identification and the Generality of the Hypercube for MPCitH.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-1].md#on-round-elimination-for-special-sound-multi-round-identification-and-the-generality-of-the-hypercube-for-mpcith)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#on-round-elimination-for-special-sound-multi-round-identification-and-the-generality-of-the-hypercube-for-mpcith)
### Authors
### Abstract

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_12](https://doi.org/10.1007/978-3-031-68376-3_12)
## Raccoon: A Masking-Friendly Signature Proven in the Probing Model.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-1].md#raccoon-a-masking-friendly-signature-proven-in-the-probing-model)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#raccoon-a-masking-friendly-signature-proven-in-the-probing-model)
### Authors
### Abstract

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_13](https://doi.org/10.1007/978-3-031-68376-3_13)
## Loquat: A SNARK-Friendly Post-quantum Signature Based on the Legendre PRF with Applications in Ring and Aggregate Signatures.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-1].md#loquat-a-snark-friendly-post-quantum-signature-based-on-the-legendre-prf-with-applications-in-ring-and-aggregate-signatures)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#loquat-a-snark-friendly-post-quantum-signature-based-on-the-legendre-prf-with-applications-in-ring-and-aggregate-signatures)
### Authors
* Xinyu Zhang, Monash University, Melbourne, Australia
* Ron Steinfeld, Monash University, Melbourne, Australia
* Muhammed F. Esgin, Monash University, Melbourne, Australia
* Joseph K. Liu, Monash University, Melbourne, Australia
* Xinyu Zhang, Data61, CSIRO, Sydney, Australia
* Dongxi Liu, Data61, CSIRO, Sydney, Australia
* Sushmita Ruj, University of New South Wales, Sydney, Australia
### Abstract
> We design and implement a novel post-quantum signature scheme based on the Legendre PRF, named Loquat. Prior to this work, efficient approaches for constructing post-quantum signatures with comparable security assumptions mainly used the MPC-in-the-head paradigm or hash trees. Our method departs from these paradigms and, notably, is SNARK-friendly, a feature not commonly found in earlier designs. Loquat requires significantly fewer computational operations for verification than other symmetric-key-based post-quantum signature schemes that support stateless signing. Our Python implementation of Loquat demonstrate a signature size of 46KB, with a signing time of 5.04 s and a verification time of 0.21 s. Instantiating the random oracle with an algebraic hash function results in the R1CS constraints for signature verification being about 148K, 7 to 175 times smaller than those required for MPC-in-the-head-based signatures and 3 to 9 times less than those for SPHINCS+ [Bernstein et al. CCS’19].
> 
> We explore two applications of Loquat. First, we incorporate it into the ID-based ring signature scheme [Buser et al. ACNS’22], achieving a significant reduction in signature size from 1.9 MB to 0.9 MB with stateless signing and practical master key generation. Our second application presents a SNARK-based aggregate signature scheme. We use the implementations of Aurora [Ben-Sasson et al. EC’19] and Fractal [Chiesa et al. EC’20] to benchmark our aggregate signature’s performance. Our findings show that aggregating 32 Loquat signatures using Aurora results in a proving time of about 7 min, a verification time of 66 s, and an aggregate signature size of 197 KB. Furthermore, by leveraging the recursive proof composition feature of Fractal, we achieve an aggregate signature with a constant size of 145 KB, illustrating Loquat’s potential for scalability in cryptographic applications.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_1](https://doi.org/10.1007/978-3-031-68376-3_1)
## MPC in the Head Using the Subfield Bilinear Collision Problem.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-1].md#mpc-in-the-head-using-the-subfield-bilinear-collision-problem)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#mpc-in-the-head-using-the-subfield-bilinear-collision-problem)
### Authors
* Janik Huth, CISPA - Helmholtz Center for Information Security, Saarbrücken, Germany
* Antoine Joux, CISPA - Helmholtz Center for Information Security, Saarbrücken, Germany
* Janik Huth, Saarland University, Saarbrücken, Germany
### Abstract
> In this paper, we introduce the subfield bilinear collision problem and use it to construct an identification protocol and a signature scheme. This construction is based on the MPC-in-the-head paradigm and uses the Fiat-Shamir transformation to obtain a signature.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_2](https://doi.org/10.1007/978-3-031-68376-3_2)
## Aggregating Falcon Signatures with LaBRADOR.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-1].md#aggregating-falcon-signatures-with-labrador)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#aggregating-falcon-signatures-with-labrador)
### Authors
* Marius A. Aardal, Aarhus University, Aarhus, Denmark
* Diego F. Aranha, Aarhus University, Aarhus, Denmark
* Sebastian Kolby, Aarhus University, Aarhus, Denmark
* Katharina Boudgoust, CNRS, Univ Montpellier, LIRMM, Montpellier, France
* Akira Takahashi, J.P.Morgan AI Research & AlgoCRYPT CoE, New York, USA
### Abstract
> Several prior works have suggested to use non-interactive arguments of knowledge with short proofs to aggregate signatures of Falcon, which is part of the first post-quantum signatures selected for standardization by NIST. Especially LaBRADOR, based on standard structured lattice assumptions and published at CRYPTO’23, seems promising to realize this task. However, no prior work has tackled this idea in a rigorous way. In this paper, we thoroughly prove how to aggregate Falcon signatures using LaBRADOR. We start by providing the first complete knowledge soundness analysis for the non-interactive version of LaBRADOR . Here, the multi-round and recursive nature of LaBRADOR requires a complex and thorough analysis. For this purpose, we introduce the notion of predicate special soundness (PSS). This is a general framework for evaluating the knowledge error of complex Fiat-Shamir arguments of knowledge protocols in a modular fashion, which we believe to be of independent interest. We then explain the exact steps to take in order to adapt the non-interactive LaBRADOR proof system for aggregating Falcon signatures and provide concrete proof size estimates. Additionally, we formalize the folklore approach of obtaining aggregate signatures from the class of hash-then-sign signatures through arguments of knowledge.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_3](https://doi.org/10.1007/978-3-031-68376-3_3)
## That's Not My Signature! Fail-Stop Signatures for a Post-quantum World.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-1].md#thats-not-my-signature-fail-stop-signatures-for-a-post-quantum-world)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#thats-not-my-signature-fail-stop-signatures-for-a-post-quantum-world)
### Authors
* Cecilia Boschini, ETH Zürich, Zürich, Switzerland
* Hila Dahari, Weizmann Institute, Rehovot, Israel
* Moni Naor, Weizmann Institute, Rehovot, Israel
* Eyal Ronen, Tel-Aviv University, Tel Aviv, Israel
### Abstract
> The Snowden’s revelations kick-started a community-wide effort to develop cryptographic tools against mass surveillance. In this work, we propose to add another primitive to that toolbox: Fail-Stop Signatures (FSS) [49]. FSS are digital signatures enhanced with a forgery-detection mechanism that can protect a computationally bounded signer from more powerful attackers. Despite the fascinating concept, research in this area stalled after the ’90 s. However, the ongoing transition to post-quantum cryptography, with its hiccups due to the novelty of underlying assumptions, has become the perfect use case for FSS. This paper aims to reboot research on FSS with practical use in mind: Our framework for FSS includes “fine-grained” security definitions (that assume a powerful, but bounded adversary e.g.: can break 128-bit of security, but not 256-bit). As an application, we show new FSS constructions for the post-quantum setting. We show that FSS are equivalent to standard, provably secure digital signatures that do not require rewinding or programming random oracles, and that this implies lattice-based FSS. Our main construction is an FSS version of \(\textsf{SPHINCS}^+\), which required building FSS versions of all its building blocks: \(\textsf{WOTS}^+\), \(\textsf{XMSS}\), and \(\textsf{FORS}\). In the process, we identify and provide generic solutions for two fundamental issues arising when deriving a large number of private keys from a single seed, and when building FSS for Hash-and-Sign-based signatures.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_4](https://doi.org/10.1007/978-3-031-68376-3_4)
## Solving the Tensor Isomorphism Problem for Special Orbits with Low Rank Points: Cryptanalysis and Repair of an Asiacrypt 2023 Commitment Scheme.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-1].md#solving-the-tensor-isomorphism-problem-for-special-orbits-with-low-rank-points-cryptanalysis-and-repair-of-an-asiacrypt-2023-commitment-scheme)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#solving-the-tensor-isomorphism-problem-for-special-orbits-with-low-rank-points-cryptanalysis-and-repair-of-an-asiacrypt-2023-commitment-scheme)
### Authors
* Valerie Gilchrist, Université Libre de Bruxelles, Brussels, Belgium
* Christophe Petit, Université Libre de Bruxelles, Brussels, Belgium
* Laurane Marco, EPFL, Lausanne, Switzerland
* Christophe Petit, University of Birmingham, Birmingham, UK
* Gang Tang, University of Birmingham, Birmingham, UK
* Gang Tang, University of Technology Sydney, Ultimo, NSW, Australia
### Abstract
> The Tensor Isomorphism Problem (TIP) has been shown equivalent to the matrix code equivalence problem, making it an interesting candidate on which to build post-quantum cryptographic primitives. These hard problems have already been used in protocol development. One of these, MEDS, is currently in Round 1 of NIST’s call for additional post-quantum digital signatures.
> 
> In this work, we consider the TIP restricted to the orbits of a special class of tensors. The hardness of the decisional version of this problem is the foundation of a commitment scheme proposed by D’Alconzo, Flamini, and Gangemi (Asiacrypt 2023). We present polynomial-time algorithms for the decisional and computational versions of TIP for special orbits, which implies that the commitment scheme is not secure. The key observations of these algorithms are that these special tensors contain some low-rank points, and their stabilizer groups are not trivial.
> 
> With these new developments in the security of TIP in mind, we give a new commitment scheme based on the general TIP that is non-interactive, post-quantum, and statistically binding, making no new assumptions. Such a commitment scheme does not currently exist in the literature.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_5](https://doi.org/10.1007/978-3-031-68376-3_5)
## Pairing-Free Blind Signatures from CDH Assumptions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-1].md#pairing-free-blind-signatures-from-cdh-assumptions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#pairing-free-blind-signatures-from-cdh-assumptions)
### Authors
* Rutchathon Chairattana-Apirom, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Stefano Tessaro, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Chenzhi Zhu, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
### Abstract
> We present the first concurrently-secure blind signatures making black-box use of a pairing-free group for which unforgeability, in the random oracle model, can be proved without relying on the algebraic group model (AGM), thus resolving a long-standing open question. Prior pairing-free blind signatures without AGM proofs have only been proved secure for bounded concurrency, relied on computationally expensive non-black-box use of NIZKs, or had complexity growing with the number of signing sessions due to the use of boosting techniques.
> 
> Our most efficient constructions rely on the chosen-target CDH assumption and can be seen as blind versions of signatures by Goh and Jarecki (EUROCRYPT ’03) and Chevallier-Mames (CRYPTO ’05). We also give a less efficient scheme with security based on (plain) CDH. The underlying signing protocols consist of four (in order to achieve regular unforgeability) or five moves (for strong unforgeability). All schemes are proved statistically blind in the random oracle model.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_6](https://doi.org/10.1007/978-3-031-68376-3_6)
## Pairing-Free Blind Signatures from Standard Assumptions in the ROM.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-1].md#pairing-free-blind-signatures-from-standard-assumptions-in-the-rom)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#pairing-free-blind-signatures-from-standard-assumptions-in-the-rom)
### Authors
* Julia Kastner, Centrum Wiskunde & Informatica, Amsterdam, The Netherlands
* Julia Kastner, Work done while at ETH Zurich, Zurich, Switzerland
* Michael Reichle, Department of Computer Science, ETH Zürich, Zürich, Switzerland
* Ky Nguyen, DIENS, École normale supérieure, CNRS, Inria, PSL University, Paris, France
* Michael Reichle, Work done partially while at ENS and Inria, Paris, France
### Abstract
> Blind Signatures are a useful primitive for privacy preserving applications such as electronic payments, e-voting, anonymous credentials, and more. However, existing practical blind signature schemes based on standard assumptions require either pairings or lattices. We present the first practical construction of a round-optimal blind signature in the random oracle model based on standard assumptions without resorting to pairings or lattices. In particular, our construction is secure under the strong RSA assumption and DDH (in pairing-free groups). For our construction, we provide a NIZK-friendly signature based on strong RSA, and efficiently instantiate a variant of Fischlin’s generic framework (CRYPTO’06). Our Blind Signature scheme has signatures of size \(4.28\) KB and communication cost \(10.98\) KB. On the way, we develop techniques that might be of independent interest. In particular, we provide efficient relaxed range-proofs for large ranges with subversion zero-knowledge and compact commitments to elements of arbitrary groups.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_7](https://doi.org/10.1007/978-3-031-68376-3_7)
## On the (In)Security of the BUFF Transform.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-1].md#on-the-in-security-of-the-buff-transform)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#on-the-in-security-of-the-buff-transform)
### Authors
* Jelle Don, Centrum Wiskunde & Informatica (CWI), Amsterdam, The Netherlands
* Serge Fehr, Centrum Wiskunde & Informatica (CWI), Amsterdam, The Netherlands
* Yu-Hsuan Huang, Centrum Wiskunde & Informatica (CWI), Amsterdam, The Netherlands
* Serge Fehr, Mathematical Institute, Leiden University, Leiden, The Netherlands
* Patrick Struck, University of Konstanz, Konstanz, Germany
### Abstract
> The BUFF transform is a generic transformation for digital signature schemes, with the purpose of obtaining additional security properties beyond standard unforgeability, e.g., exclusive ownership and non-resignability. In the call for additional post-quantum signatures, these were explicitly mentioned by the NIST as “additional desirable security properties”, and some of the submissions indeed refer to the BUFF transform with the purpose of achieving them, while some other submissions follow the design of the BUFF transform without mentioning it explicitly.
> 
> In this work, we show the following negative results regarding the non-resignability property in general, and the BUFF transform in particular. In the plain model, we observe by means of a simple attack that any signature scheme for which the message has a high entropy given the signature does not satisfy the non-resignability property (while non-resignability is trivially not satisfied if the message can be efficiently computed from its signature). Given that the BUFF transform has high entropy in the message given the signature, it follows that the BUFF transform does not achieve non-resignability whenever the random oracle is instantiated with a hash function, no matter what hash function.
> 
> When considering the random oracle model (ROM), the matter becomes slightly more delicate since prior works did not rigorously define the non-resignability property in the ROM. For the natural extension of the definition to the ROM, we observe that our impossibility result still holds, despite there having been positive claims about the non-resignability of the BUFF transform in the ROM. Indeed, prior claims of the non-resignability of the BUFF transform rely on faulty argumentation.
> 
> On the positive side, we prove that a salted version of the BUFF transform satisfies a slightly weaker variant of non-resignability in the ROM, covering both classical and quantum attacks, if the entropy requirement in the (weakened) definition of non-resignability is statistical; for the computational variant, we show yet another negative result.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_8](https://doi.org/10.1007/978-3-031-68376-3_8)
## Accelerating SLH-DSA by Two Orders of Magnitude with a Single Hash Unit.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-1].md#accelerating-slh-dsa-by-two-orders-of-magnitude-with-a-single-hash-unit)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#accelerating-slh-dsa-by-two-orders-of-magnitude-with-a-single-hash-unit)
### Authors
* Markku-Juhani O. Saarinen, SoC Hub Research Centre, Tampere University, Tampere, Finland
### Abstract
> We report on efficient and secure hardware implementation techniques for the FIPS 205 SLH-DSA Hash-Based Signature Standard. We demonstrate that very significant overall performance gains can be obtained from hardware that optimizes the padding formats and iterative hashing processes specific to SLH-DSA. A prototype implementation, SLotH, contains Keccak/SHAKE, SHA2-256, and SHA2-512 cores and supports all 12 parameter sets of SLH-DSA. SLotH also supports side-channel secure PRF computation and Winternitz chains. SLotH drivers run on a small RISC-V control core, as is common in current Root-of-Trust (RoT) systems.
> 
> The new features make SLH-DSA on SLotH many times faster compared to similarly-sized general-purpose hash accelerators. Compared to unaccelerated microcontroller implementations, the performance of SLotH ’s SHAKE variants is up to \(300\times \) faster; signature generation with 128f parameter set is 4,903,978 cycles, while signature verification with 128 s parameter set is only 179,603 cycles. The SHA2 parameter sets have approximately half of the speed of SHAKE parameter sets. We observe that the signature verification performance of SLH-DSA’s “s” parameter sets is generally better than that of accelerated ECDSA or Dilithium on similarly-sized RoT targets. The area of the full SLotH system is small, from 63 kGE (SHA2, Cat 1 only) to 155 kGe (all parameter sets). Keccak Threshold Implementation adds another 130 kGE.
> 
> We provide sensitivity analysis of SLH-DSA in relation to side-channel leakage. We show experimentally that an SLH-DSA implementation with CPU hashing will rapidly leak the \(\mathsf {SK.seed}\) master key. We perform a 100,000-trace TVLA leakage assessment with a protected SLotH unit.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_9](https://doi.org/10.1007/978-3-031-68376-3_9)
## Ring Signatures for Deniable AKEM: Gandalf's Fellowship.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-1].md#ring-signatures-for-deniable-akem-gandalfs-fellowship)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#ring-signatures-for-deniable-akem-gandalfs-fellowship)
### Authors
* Phillip Gajland, Max Planck Institute for Security and Privacy, Bochum, Germany
* Phillip Gajland, Ruhr-Universität Bochum, Bochum, Germany
* Jonas Janneck, Ruhr-Universität Bochum, Bochum, Germany
* Eike Kiltz, Ruhr-Universität Bochum, Bochum, Germany
### Abstract
> Ring signatures, a cryptographic primitive introduced by Rivest, Shamir and Tauman (ASIACRYPT 2001), offer signer anonymity within dynamically formed user groups. Recent advancements have focused on lattice-based constructions to improve efficiency, particularly for large signing rings. However, current state-of-the-art solutions suffer from significant overhead, especially for smaller rings.
> 
> In this work, we present a novel NTRU-based ring signature scheme, \(\textsc {Gandalf} \), tailored towards small rings. Our post-quantum scheme achieves a 50% reduction in signature sizes compared to the linear ring signature scheme \(\textsc {Raptor} \) (ACNS 2019). When compared to the sublinear ring signature scheme \(\textsc {Smile} \) (CRYPTO 2021), our signatures are more compact for rings of up to 26. In particular, for rings of size two, our ring signatures are only 1236 bytes.
> 
> Additionally, we explore the use of ring signatures to obtain deniability in authenticated key exchange mechanisms (AKEMs), the primitive behind the recent HPKE standard used in MLS and TLS. We take a fine-grained approach at formalising sender deniability within AKEM and seek to define the strongest possible notions. Our contributions extend to a black-box construction of a deniable AKEM from a KEM and a ring signature scheme for rings of size two. Our approach attains the highest level of confidentiality and authenticity, while simultaneously preserving the strongest forms of deniability in two orthogonal settings. Finally, we present parameter sets for our schemes, and show that our deniable AKEM, when instantiated with our ring signature scheme, yields ciphertexts of 2004 bytes.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_10](https://doi.org/10.1007/978-3-031-68376-3_10)
## Polytopes in the Fiat-Shamir with Aborts Paradigm.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-1].md#polytopes-in-the-fiat-shamir-with-aborts-paradigm)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#polytopes-in-the-fiat-shamir-with-aborts-paradigm)
### Authors
* Henry Bambury, DIENS, École normale supérieure, CNRS, Inria, PSL University, Paris, France
* Hugo Beguinet, DIENS, École normale supérieure, CNRS, Inria, PSL University, Paris, France
* Éric Sageloli, DIENS, École normale supérieure, CNRS, Inria, PSL University, Paris, France
* Henry Bambury, DGA, Paris, France
* Hugo Beguinet, Thales, Gennevilliers, France
* Thomas Ricosset, Thales, Gennevilliers, France
* Éric Sageloli, Thales, Gennevilliers, France
* Éric Sageloli, École polytechnique, Institut polytechnique de Paris, Palaiseau, France
### Abstract
> The Fiat-Shamir with Aborts paradigm (FSwA) uses rejection sampling to remove a secret’s dependency on a given source distribution. Recent results revealed that unlike the uniform distribution in the hypercube, both the continuous Gaussian and the uniform distribution within the hyperball minimise the rejection rate and the size of the proof of knowledge. However, in practice both these distributions suffer from the complexity of their sampler. So far, those three distributions are the only available alternatives, but none of them offer the best of all worlds: competitive proof of knowledge size and rejection rate with a simple sampler.
> 
> We introduce a new generic framework for FSwA using polytope based rejection sampling to enable a wider variety of constructions. As a matter of fact, this framework is the first to generalise these results to integral distributions. To complement the lack of alternatives, we also propose a new polytope construction, whose uniform sampler approaches in simplicity that of the hypercube. At the same time, it provides competitive proof of knowledge size compared to that obtained from the Gaussian distribution. Concurrently, we share some experimental improvements of our construction to further reduce the proof size. Finally, we propose a signature based on the FSwA paradigm using both our framework and construction. We prove it to be competitive with Haetae in signature size and with Dilithium on sampler simplicity.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_11](https://doi.org/10.1007/978-3-031-68376-3_11)
## On Round Elimination for Special-Sound Multi-round Identification and the Generality of the Hypercube for MPCitH.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-1].md#on-round-elimination-for-special-sound-multi-round-identification-and-the-generality-of-the-hypercube-for-mpcith)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#on-round-elimination-for-special-sound-multi-round-identification-and-the-generality-of-the-hypercube-for-mpcith)
### Authors
* Andreas Hülsing, SandboxAQ, Palo Alto, USA
* David Joseph, SandboxAQ, Palo Alto, USA
* Anand Kumar Narayanan, SandboxAQ, Palo Alto, USA
* Andreas Hülsing, Eindhoven University of Technology, Eindhoven, The Netherlands
* Christian Majenz, Technical University of Denmark, Kongens Lyngby, Denmark
### Abstract
> A popular way to build post-quantum signature schemes is by first constructing an identification scheme (IDS) and applying the Fiat-Shamir transform to it. In this work we tackle two open questions related to the general applicability of techniques around this approach that together allow for efficient post-quantum signatures with optimal security bounds in the QROM.
> 
> First, we consider a recent work by Aguilar-Melchor, Hülsing, Joseph, Majenz, Ronen, and Yue (Asiacrypt’23) that showed that an optimal bound for three-round commit & open IDS by Don, Fehr, Majenz, and Schaffner (Crypto’22) can be applied to the five-round Syndrome-Decoding in the Head (SDitH) IDS. For this, they first applied a transform that replaced the first three rounds by one. They left it as an open problem if the same approach applies to other schemes beyond SDitH. We answer this question in the affirmative, generalizing their round-elimination technique and giving a generic security proof for it. Our result applies to any IDS with \(2n+1\) rounds for \(n>1\). However, a scheme has to be suitable for the resulting bound to not be trivial. We find that IDS are suitable when they have a certain form of special-soundness which many commit & open IDS have.
> 
> Second, we consider the hypercube technique by Aguilar-Melchor, Gama, Howe, Hülsing, Joseph, and Yue (Eurocrypt’23). An optimization that was proposed in the context of SDitH and is now used by several of the contenders in the NIST signature on-ramp. It was conjectured that the technique applies generically for the MPC-in-the-Head (MPCitH) technique that is used in the design of many post-quantum IDS if they use an additive secret sharing scheme but this was never proven. In this work we show that the technique generalizes to MPCitH IDS that use an additively homomorphic MPC protocol, and we prove that security is preserved.
> 
> We demonstrate the application of our results to the identification scheme of RYDE, a contender in the recent NIST signature on-ramp. While RYDE was already specified with the hypercube technique applied, this gives the first QROM proof for RYDE with an optimally tight bound.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_12](https://doi.org/10.1007/978-3-031-68376-3_12)
## Raccoon: A Masking-Friendly Signature Proven in the Probing Model.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-1].md#raccoon-a-masking-friendly-signature-proven-in-the-probing-model)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#raccoon-a-masking-friendly-signature-proven-in-the-probing-model)
### Authors
* Rafaël del Pino, PQShield, Oxford, UK
* Shuichi Katsumata, PQShield, Oxford, UK
* Thomas Prest, PQShield, Oxford, UK
* Shuichi Katsumata, AIST, Warrendale, USA
* Mélissa Rossi, ANSSI, Paris, France
### Abstract
> This paper presents Raccoon, a lattice-based signature scheme submitted to the NIST 2022 call for additional post-quantum signatures. Raccoon has the specificity of always being masked. Concretely, all sensitive intermediate values are shared into d parts. The main design rationale of Raccoon is to be easy to mask at high orders, and this dictated most of its design choices, such as the introduction of new algorithmic techniques for sampling small errors. As a result, Raccoon achieves a masking overhead \(O(d \log d)\) that compares favourably with the overheads \(O(d^2 \log q)\) observed when masking standard lattice signatures.
> 
> In addition, we formally prove the security of Raccoon in the t-probing model: an attacker is able to probe \(t \le d-1\) shares during each execution of the main algorithms (key generation, signing, verification). While for most cryptographic schemes, the black-box t-probing security can be studied in isolation, in Raccoon this analysis is performed jointly.
> 
> To that end, a bridge must be made between the black-box game-based EUF-CMA proof and the usual simulation proofs of the ISW model (CRYPTO 2003). We formalize an end-to-end masking proof by deploying the probing EUF-CMA introduced by Barthe et al. (Eurocrypt 2018) and exhibiting the simulators of the non-interference properties (Barthe et al. CCS 2016). The proof is divided into three novel parts:
> 
> a simulation proof in the ISW model that allows to propagate the dependancy to a restricted number of inputs and random coins,
> 
> a game-based proof showing that the security of Raccoon with probes can be reduced to an instance of Raccoon with smaller parameters,
> 
> a parameter study to ensure that the smaller instance is secure, using a robust generalization of the Rényi divergence.
> 
> While we apply our techniques to Raccoon, we expect that the algorithmic and proof techniques we introduce will be helpful for the design and analysis of future masking-friendly schemes.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_13](https://doi.org/10.1007/978-3-031-68376-3_13)
